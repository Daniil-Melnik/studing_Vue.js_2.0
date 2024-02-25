<template>
    <div class="form-group">
        <label>{{maintext}}<img v-if="K" :src="require(`@/assets/${isContactImg}`)" class="ok_img"/></label>
        <input type="text" v-on:input="controlText($event.target.value)" :class="[isContactStyle]">
    </div>
</template>

<script>
    export default {

        name: 'AutoCinput',

        props: ['maintext', 'reg', 'indtxt'],

        data(){
			return {
				K: false,
				text: "",
				isContactStyle: "form-control-none",
				isContact : "false",
				isContactImg: "",
			}
		},
        methods: {
				controlText(s){
                    console.log(this.$store.state)
					this.text = s
					this.K = true
					if ((this.reg).test(this.text)){ 
						this.isContact = true
						this.isContactStyle = "form-control-good"
						this.isContactImg = "ok.svg"
						this.sendPack() 
					}
					else {
						this.isContact = false
						this.isContactStyle = "form-control-bad"
						this.isContactImg = "not_ok.png"
						this.sendPack()
					}
					},
					sendPack(){
						this.$emit('senddata', this.indtxt , this.isContact, this.text);
					}
				}      
    }
</script>

<style>

.form-control-none {
	display:block;
	width:100%;
	height:34px;
	padding:6px 12px;
	font-size:14px;
	line-height:1.42857143;
	color:#555;
	background-color:#fff;
	background-image:none;
	border:1px solid #ccc;
	border-radius:4px;
	-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075);
	box-shadow:inset 0 1px 1px rgba(0,0,0,.075);
	-webkit-transition:border-color ease-in-out .45s,
	-webkit-box-shadow ease-in-out .45s;
	-o-transition:border-color ease-in-out .45s,
	box-shadow ease-in-out .45s;
	transition:border-color ease-in-out .45s,box-shadow ease-in-out .45s
}

.form-control-bad {
	display:block;
	width:100%;
	height:34px;
	padding:6px 12px;
	font-size:14px;
	line-height:1.42857143;
	color:#555;
	background-color:rgba(255, 0, 0, 0.075);
	background-image:none;
	border:1px solid #ff0000;
	border-radius:4px;
	-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075);
	box-shadow:inset 1px 1px 1px rgb(255, 0, 0);
	-webkit-transition:border-color ease-in-out .45s,
	-webkit-box-shadow ease-in-out .45s;
	-o-transition:border-color ease-in-out .45s,
	box-shadow ease-in-out .45s;
	transition:border-color ease-in-out .45s,box-shadow ease-in-out .15s
}

.form-control-good {
	display:block;
	width:100%;
	height:34px;
	padding:6px 12px;
	font-size:14px;
	line-height:1.42857143;
	color:#555;
	background-color:rgba(21, 255, 0, 0.075);
	background-image:none;
	border:1px solid #00720a;
	border-radius:4px;
	-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075);
	box-shadow:inset 0 1px 1px rgb(0, 181, 24);
	-webkit-transition:border-color ease-in-out .45s,
	-webkit-box-shadow ease-in-out .45s;
	-o-transition:border-color ease-in-out .45s,
	box-shadow ease-in-out .45s;
	transition:border-color ease-in-out .45s,box-shadow ease-in-out .45s
}

.ok_img {
	width: 12px;
	height: 12px;
	transition: 5s;
}

label {
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

.form-group {
    margin-top: 8px;
}

input {
	font-size: 20px;
}

</style>