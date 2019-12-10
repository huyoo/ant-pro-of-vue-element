/**
 * create by hy ON 2019/5/12
 */
import {asyncRouterMap as router} from '@/router/router.config'
import logo from "@/assets/logo.png"
import {ElMenu} from 'element-ui'

export default {
	name: "Menu",
	props: {
		isMobile: {
			propTypes: Boolean,
			required: false,
			default: false
		},
		collapse: {
			propTypes: Boolean,
			required: false,
			default: false
		}
	},
	methods: {
		renderMenu(routes){
			return routes.map((r, index) => {
				if(r.children){
					return this.renderSubMenu(r, index);
				}else {
					return this.renderMenuItem(r, index);
				}
			});
		},
		renderSubMenu(route, index){
			const dom = route.children.map((r, i) => {
				if(r.children){
					return this.renderSubMenu(r, index+""+i);
				}else {
					return this.renderMenuItem(r, index+""+i);
				}
			});
			return <ElMenu>
				<span slot='title'><i className={route.meta.icon}/><span>{route.meta.title}</span></span>
				{dom}
			</ElMenu>
		},
		renderMenuItem(route, index){
			return <Item key={index}>
				<router-link to={route.path}>{route.meta.title}</router-link>
			</Item>
		},
	},
	render() {
		const {collapse} = this;
		return (<div className="pro-menu">
				<div className={`${collapse ? 'center' : ''} menu-title`}>
					<img src={logo} alt={'Antd'}/>
					{!collapse && <span>Preview</span>}
				</div>
				<ElMenu mode="inline"
				      inlineCollapsed={collapse}
				      theme="dark"
				      defaultSelectedKeys={["1"]}
				      defaultOpenKeys={["1"]}>
					{this.renderMenu(router[0].children)}
				</ElMenu>
			</div>
		)
	}
}
