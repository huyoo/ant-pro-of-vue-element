/**
 * 缓存Step1的表单数据 以供Step2使用
 * create by hy ON 2019/10/9
 */
export default {
	state: {
		paymentUser: 'ant-design@alipay.com',
		payType: 'alipay',
		receiver: 'test@example.com',
		name: 'Alex',
		money: '5000'
	},
	mutations: {
		update(state, values){
			Object.assign(state, values);
		}
	},
	actions: {
		update(context, formValue){
			context.commit('update', formValue)
		}
	}
}