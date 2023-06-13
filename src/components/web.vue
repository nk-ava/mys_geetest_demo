<template>
	<div>
		<div>
			<h1>请点击进行验证</h1>
		</div>
		<div id="captcha">
			<p id="wait" class="show">正在加载验证码......</p>
		</div>
	</div>
</template>
<script>
	import "../lib/gt.js"
	import "../lib/jquery.js"
	import {
		getHeaders
	} from "./tool/ds.js"

	export default {
		name: "web",
		mounted() {
			let param = this.$route.query
			if (!param.gt || !param.challenge || !param.success || !param.new_captcha) {
				$("#wait")[0].innerText = "参数不全，请重新获取"
				return
			}
			initGeetest({
				gt: param.gt,
				challenge: param.challenge,
				offline: !param.success,
				new_captcha: param.new_captcha
			}, function(captchaObj) {
				captchaObj.appendTo("#captcha")
				captchaObj.onReady(function() {
					$("#wait").hide();
				});
				captchaObj.onSuccess(function() {
					let result = captchaObj.getValidate()
					console.log(result)
					$.ajax({
						url: "/game_record/app/card/wapi/verifyVerification",
						type: 'post',
						headers: getHeaders("", JSON.stringify(result)),
						data: result,
						dataType: "json",
						success: function(data) {
							console.log(data)
						},
						error: function(err) {
							console.log(err)
						}
					})
				})
			})
		}
	}
</script>

<style>
	#captcha {
		display: flex;
		justify-content: center;
	}

	div {
		text-align: center;
	}
</style>