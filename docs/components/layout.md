---
title:'layout'
---


### 展示
<ClientOnly><use-layout></use-layout></ClientOnly>

### 可选参数






### 示例
```
  <div>
    <HotsNav :selected.sync="selected">
      <HotsNavItem name="home">首页</HotsNavItem>
      <HotsSubNav name="about">
        <template slot="title">关于</template>
        <HotsNavItem name="culture">企业文化</HotsNavItem>
        <HotsNavItem name="developers">开发团队</HotsNavItem>
        <HotsSubNav name="contacts">
          <template slot="title">联系方式</template>
          <HotsNavItem name="wechat">微信</HotsNavItem>
          <HotsNavItem name="qq">QQ</HotsNavItem>
          <HotsSubNav name="phone">
            <template slot="title">手机</template>
            <HotsNavItem name="cm">移动</HotsNavItem>
            <HotsNavItem name="cu">联通</HotsNavItem>
            <HotsNavItem name="cn">电信</HotsNavItem>
          </HotsSubNav>
        </HotsSubNav>

      </HotsSubNav>
      <HotsNavItem name="hire">招聘</HotsNavItem>
    </HotsNav>
    <p>你好，我是中文</p>
  </div>
```
