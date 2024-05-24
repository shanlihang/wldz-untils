//弹出轻提示
export const createToast = (content:string,time:number=1500) => {
	uni.showToast({
		title:content,
		icon:'none',
		duration:time,
	})
}

//弹出加载弹窗
export const createLoading = (content:string="") => {
	uni.showLoading({
		title:content,
	})
}

//关闭加载弹窗
export const closeLoading = () => {
	uni.hideLoading()
}

//弹出模态弹窗
export const createModal = (title:string,content:string,successCallback:(res:{
	confirm:boolean,
	cancel:boolean,
	content:string
}) => any,showCancel:boolean=true,cancelText:string="取消",cancelColor:string="#000",confirmText:string="确定",confirmColor="#31AE37",editable:boolean=false,placeholderText:string="输入框提示文本") => {
	uni.showModal({
		title:title,
		content:content,
		success:successCallback,
		showCancel:showCancel,
		cancelText:cancelText,
		cancelColor:cancelColor,
		confirmText:confirmText,
		confirmColor:confirmColor,
		editable:editable,
		placeholderText:placeholderText
	})
}

//弹出操作面板
export const createActionSheet = (itemList:Array<string>,successCallback:(res:{tapIndex:number}) => any,itemColor:string="#000") => {
	if(itemList.length <=6) {
		uni.showActionSheet({
			itemList:itemList,
			itemColor:itemColor,
			success:successCallback
		})
	}else{
		createToast("操作菜单最多可填写6项")
	}
	
}
