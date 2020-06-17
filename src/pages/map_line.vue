<template>
    <div class="amap">
        <div class="amap_map" ref="amap_map"></div>
    </div>
</template>

<script>
import amap from "AMap";
import echarts from "echarts";
export default {
    props: [],
    components: {},
    data() {
        return {
            // 流线起始点
            flyLine: [
                {
                    coords: [
                        [116.496437, 39.913523],
                        [123.499706, 41.857793]
                    ]
                },
                {
                    coords: [
                        [116.496437, 39.913523],
                        [86.113232, 43.684254]
                    ]
                },
                {
                    coords: [
                        [116.496437, 39.913523],
                        [87.343701, 35.720308]
                    ]
                },
                {
                    coords: [
                        [116.496437, 39.913523],
                        [101.406201, 24.177443]
                    ]
                },
                {
                    coords: [
                        [116.496437, 39.913523],
                        [111.249951, 24.976714]
                    ]
                },
                {
                    coords: [
                        [116.496437, 39.913523],
                        [107.206982, 33.843608]
                    ]
                },
                {
                    coords: [
                        [116.496437, 39.913523],
                        [115.468701, 43.557002]
                    ]
                },
                {
                    coords: [
                        [116.496437, 39.913523],
                        [107.031201, 37.134586]
                    ]
                },
                {
                    coords: [
                        [116.496437, 39.913523],
                        [99.648388, 38.522914]
                    ]
                },
                {
                    coords: [
                        [116.496437, 39.913523],
                        [124.081982, 49.361353]
                    ]
                }
            ],
            // 点集
            goals: [
                [123.499706, 41.857793],
                [86.113232, 43.684254],
                [87.343701, 35.720308],
                [101.406201, 24.177443],
                [111.249951, 24.976714],
                [107.206982, 33.843608],
                [115.468701, 43.557002],
                [107.031201, 37.134586],
                [107.031201, 37.134586],
                [99.648388, 38.522914],
                [124.081982, 49.361353]
            ]
        };
    },
    watch: {},
    methods: {
        MapInit() {
            let _this = this;
            let option = {
                // 加载 amap 组件
                amap: {
                    // 高德地图中心经纬度
                    center: [105.397428, 38.90923], //中心点
                    // 高德地图缩放
                    zoom: 4,
                    zoomEnable: false,
                    dragEnable: false,
                    // 启用resize
                    resizeEnable: false,
                    // 自定义地图样式主题
                    mapStyle: "amap://styles/bb7f5165253f57515d7ba226b25ad7ec" //地图主题
                    // viewMode:'3D',//开启3D视图,默认为关闭
                    // expandZoomRange:true,
                    // zooms:[3,20],
                    // pitch: 40
                },
                tooltip: {
                    trigger: "item",
                    show: false
                },
                animation: false,
                series: [
                    // 流线
                    {
                        coordinateSystem: "amap", // 该系列使用的坐标系是高德地图的坐标系
                        type: "lines", // 该类型用于地图上路线的绘制
                        zlevel: 1, // 相当于z-index
                        effect: {
                            // 线特效的配置
                            show: true, // 是否显示特效
                            period: 5, // 特效动画的时间
                            trailLength: 0.05, // 特效尾迹的长度 0-1
                            color: "#3437ff", // 特效的颜色
                            symbolSize: 5 // 特效的大小
                        },
                        lineStyle: {
                            // 线的颜色
                            normal: {
                                color: "rgba(47,68,200,0.1)",
                                width: 2,
                                curveness: 0.2
                            }
                        },
                        data: _this.flyLine
                    },
                    // 目标点
                    {
                        name: "目标点",
                        type: "scatter",
                        // 使用高德地图坐标系
                        coordinateSystem: "amap",
                        // 数据格式跟在 geo 坐标系上一样，每一项都是 [经度，纬度，数值大小，其它维度...]
                        data: _this.goals,
                        symbolSize: 3,
                        encode: {
                            value: 2
                        },
                        label: {
                            normal: {
                                formatter: "{b}",
                                position: "right",
                                show: false
                            },
                            emphasis: {
                                show: true
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: "rgba(98,122,200,0.78)"
                            }
                        }
                    }
                ]
            };
            let chart = echarts.init(_this.$refs.amap_map);
            chart.setOption(option);
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
