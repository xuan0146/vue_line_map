<template>
    <div class="amap">
        <div class="amap_map" id="amap_map"></div>
    </div>
</template>

<script>
import AMap from "AMap";
export default {
    props: [],
    components: {},
    data() {
        return {
            // data中,location是地理编码，color 1绿2黄3红
            dataList: [
                { location: "113.772,22.785", color: 1 },
                { location: "114.772,22.785", color: 3 },
                { location: "116.410778,39.897614", color: 2 },
                { location: "123.499706,41.857793", color: 4 },
                { location: "111.722363,40.868346", color: 1 },
                { location: "103.987988,30.662124", color: 3 }
            ],
        };
    },
    watch: {},
    methods: {
        // 初始化地图
        MapInit() {
            let _this = this;
            // 地图初始化
            // 注： mapStyle里面的 [amap://styles/xxxxxxxx] 需要跟资源文件index.html中引入的js中key值搭配
            let map = new AMap.Map("amap_map", {
                center: [105.397428, 35.90923],
                mapStyle: "amap://styles/bb7f5165253f57515d7ba226b25ad7ec", //设置地图的显示样式
                resizeEnable: true,
                zoom: 5
            });

            // 根据color状态展示不同的图片
            const style = [
                {
                    // 1
                    url:
                        "https://a.amap.com/jsapi_demos/static/images/green.png",
                    anchor: new AMap.Pixel(5, 5), // 位移
                    size: new AMap.Size(10, 10) // 图片大小
                },
                {
                    // 2
                    url:
                        "https://a.amap.com/jsapi_demos/static/images/blue.png",
                    anchor: new AMap.Pixel(5, 5),
                    size: new AMap.Size(10, 10)
                },
                {
                    // 3
                    url:
                        "https://a.amap.com/jsapi_demos/static/images/orange.png",
                    anchor: new AMap.Pixel(5, 5),
                    size: new AMap.Size(10, 10)
                },
                {
                    // 4
                    url: "https://a.amap.com/jsapi_demos/static/images/red.png",
                    anchor: new AMap.Pixel(5, 5),
                    size: new AMap.Size(10, 10)
                }
            ];

            let locationData = []; //存放经纬度的数组
            let status = null;
            for (let i = 0; i < _this.dataList.length; i++) {
                let locationArr = _this.dataList[i].location.split(",");
                // 判断需要展示的颜色类型
                if (_this.dataList[i].dataList === 1) {
                    status = 0; //根据下标来相对应样式 例如：绿色对应style数组中的第0个样式
                } else if (_this.dataList[i].color === 2) {
                    status = 1;
                } else if (_this.dataList[i].color === 3) {
                    status = 2;
                } else if (_this.dataList[i].color === 4) {
                    status = 3;
                }

                locationData.push({
                    lnglat: locationArr,
                    style: status // 对应的status相对应的样式 style
                });
            }

            // 点放置
            let mass = new AMap.MassMarks(locationData, {
                opacity: 0.8,
                zIndex: 111,
                cursor: "pointer",
                style: style
            });

            let marker = new AMap.Marker({ content: " ", map: map });

            mass.setMap(map);
        }
    },
    mounted() {
        // 初始化地图
        this.MapInit();
    }
};
</script>

<style scoped lang="scss" type="text/scss">
.amap {
    width: 100vw;
    height: 100vh;
    overflow: hidden;

    &_map {
        width: 100%;
        height: 100%;
    }
}
</style>
