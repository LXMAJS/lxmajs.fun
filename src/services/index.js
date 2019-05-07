import axios from '@/utils/axios.conf'

// 获取图片数据
const loadImageData = () => {
    let imageList = [
        {
            id: 1,
            caption: "test1",
            src: "1.jpg",
            desc: "阿尔岗位而共同为人工"
        },
        {
            id: 2,
            caption: "test2",
            src: "2.jpg",
            desc: "阿尔法狗瓦儿歌"
        },
        {
            id: 3,
            caption: "test3",
            src: "3.jpg",
            desc: "aerfbsetrbsertbsertbwserb"
        },
        {
            id: 4,
            caption: "test4",
            src: "4.jpg",
            desc: "SAefvaewrbveasbrre"
        },
        {
            id: 5,
            caption: "test5",
            src: "5.jpg",
            desc: "noene"
        },
        {
            id: 6,
            caption: "test6",
            src: "6.jpg",
            desc: "nosene"
        },
        {
            id: 7,
            caption: "test7",
            src: "/static/index-images/7.jpg",
            desc: "noaerbvne"
        }
    ]
    return imageList;
}

export {
    loadImageData,
    rsort
} 