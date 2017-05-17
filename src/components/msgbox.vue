<template>
  <div class="onlin-conbox msgbox">
    <form action="###" target="_blank" id="online-reset">
						<span class="online-conitem">
							<label for="online-name" class="online-contit">您的姓名：</label>
							<input type="text" value="Name" onfocus="if(this.value=='Name'){this.value=''};this.style.color='#666666';"
                     onblur="if(this.value==''||this.value=='Name'){this.value='Name';this.style.color='#C4C4C4';}" id="online-name" />
						</span>
      <span class="online-conitem">
							<label for="online-tel" class="online-contit">您的电话：</label>
							<input type="text" value="Tel" onfocus="if(this.value=='Tel'){this.value=''};this.style.color='#666666';"
                     onblur="if(this.value==''||this.value=='Tel'){this.value='Tel';this.style.color='#C4C4C4';}" id="online-tel" />
						</span>
      <span class="online-conitem">
							<label for="online-email" class="online-contit">您的邮箱：</label>
							<input type="text" value="E-mail" onfocus="if(this.value=='E-mail'){this.value=''};this.style.color='#666666';"
                     onblur="if(this.value==''||this.value=='E-mail'){this.value='E-mail';this.style.color='#C4C4C4';}" id="online-email" />
						</span>
      <span class="online-conitem">
							<label for="online-context" class="online-contit">您的留言：</label>
							<textarea name="" id="online-context" value="Contact" rows="2"> </textarea>
						</span>
    </form>
    <span class="online-conitem online-test">
						<label for="online-test" class="online-contit">验证码：</label>
						<input type="text" value="Test" onfocus="if(this.value=='Test'){this.value=''};this.style.color='#666666';"
                   onblur="if(this.value==''||this.value=='Test'){this.value='Test';this.style.color='#C4C4C4';}" id="online-test" />
					</span>
    <div class="clearfix"></div>
    <button type="reset" form="online-reset" id="online-resicon">重置内容</button><!--reset重置内容-->
    <button type="submit" form="online-reset" id="online-subicon">提交留言</button><!--submit提交内容-->
  </div>
</template>