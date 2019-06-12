---
title:'pages'
---


### 展示
<ClientOnly><use-pages></use-pages></ClientOnly>

### 可选参数






### 示例
```
  <div>
    <Hotspages :selected.sync="selected">
      <HotspagesItem name="home">首页</HotspagesItem>
      <HotsSubpages name="about">
        <template slot="title">关于</template>
        <HotspagesItem name="culture">企业文化</HotspagesItem>
        <HotspagesItem name="developers">开发团队</HotspagesItem>
        <HotsSubpages name="contacts">
          <template slot="title">联系方式</template>
          <HotspagesItem name="wechat">微信</HotspagesItem>
          <HotspagesItem name="qq">QQ</HotspagesItem>
          <HotsSubpages name="phone">
            <template slot="title">手机</template>
            <HotspagesItem name="cm">移动</HotspagesItem>
            <HotspagesItem name="cu">联通</HotspagesItem>
            <HotspagesItem name="cn">电信</HotspagesItem>
          </HotsSubpages>
        </HotsSubpages>

      </HotsSubpages>
      <HotspagesItem name="hire">招聘</HotspagesItem>
    </Hotspages>
    <p>你好，我是中文</p>
  </div>
```
