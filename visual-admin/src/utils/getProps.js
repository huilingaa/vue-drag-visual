export default function (type){
    let obj={
        "page":[
            
        ],
        "table":[
            {
                type:"string",
                name:"dataSource",
                title:"数据榜单"
            }
        ],
        "tableColumn":[
            {
                type:"string",
                name:"dataIndex",
                title:"映射字段"
            },
            {
                type:"string",
                name:"title",
                title:"表头文案"
            }
        ],
        "pagination":[
            {
                type:"string",
                name:"current",
                title:"当前页码"
            },
            {
                type:"string",
                name:"defaultCurrent",
                title:"默认页码"
            },
            {
                type:"boolean",
                name:"disabled",
                title:"禁用分页"
            },
            {
                type:"string",
                name:"pageSize",
                title:"	每页条数"
            },
            {
                type:"string",
                name:"total",
                title:"数据总数"
            }
            
        ],
        "div":[
            
        ],
        "text":[
            {
                type:"string",
                name:"children",
                title:"子组件"
            }
        ],
        "img":[
            {
                type:"string",
                name:"src",
                title:"图片链接"
            }
        ],
        "form":[
            {
                type:"string",
                name:"name",
                title:"ref绑定"
            },
            {
                type:"radioGroup",
                name:"labelAlign",
                title:"对齐方式",
                data:[
                    {
                        label:"左对齐",
                        value:"left",
                    },
                    {
                        label:"右对齐",
                        value:"middle",
                    }
                ]
            },
            {
                type:"radioGroup",
                name:"layout",
                title:"数据方向",
                data:[
                    {
                        label:"horizontal",
                        value:"horizontal",
                    },
                    // {
                    //     label:"vertical",
                    //     value:"vertical",
                    // },
                    {
                        label:"vertical",
                        value:"inline",
                    }
                ]
            }
        ],
        "select":[
            {
                type:"array",
                name:"options",
                title:"数据绑定"
            },
            {
                type:"string",
                name:"placeholder",
                title:"提示文案"
            }
        ],
        "radio":[
            {
                type:"array",
                name:"options",
                title:"数据绑定"
            },
            {
                type:"string",
                name:"defaultValue",
                title:"默认数据"
            },
            {
                type:"string",
                name:"value",
                title:"固定数据"
            }
        ],
        "switch":[
            {
                type:"boolean",
                name:"checked",
                title:"是否选中"
            },
            {
                type:"boolean",
                name:"disabled",
                title:"是否禁用"
            }
        ],
        "formItem":[
            {
                type:"string",
                name:"label",
                title:"字段名称"
            },
            {
                type:"string",
                name:"name",
                title:"映射字段"
            }
        ],
        "input":[
            {
                type:"string",
                name:"defaultValue",
                title:"默认数据"
            },
            {
                type:"string",
                name:"value",
                title:"固定数据"
            },
            {
                type:"string",
                name:"placeholder",
                title:"提示文案"
            }
        ],
        "datePicker":[
            {
                type:"string",
                name:"defaultValue",
                title:"默认数据"
            },
            {
                type:"string",
                name:"value",
                title:"固定数据"
            }
        ],
        "modal":[
            {
                type:"string",
                name:"title",
                title:"弹出层标题"
            },
            {
                type:"boolean",
                name:"visible",
                title:"是否可见"
            },
            {
                type:"string",
                name:"width",
                title:"宽度"
            }
        ],
        "column":[
            {
                type:"json",
                name:"data",
                title:"数据"
            },
            {
                type:"string",
                name:"width",
                title:"宽度"
            },
            {
                type:"string",
                name:"height",
                title:"高度"
            },
            {
                type:"string",
                name:"filedX",
                title:"x轴字段"
            },
            {
                type:"string",
                name:"filedY",
                title:"y轴字段"
            },
            {
                type:"string",
                name:"color",
                title:"分类字段"
            },
            {
                type:"boolean",
                name:"adjust",
                title:"多列横向"
            },
            {
                type:"boolean",
                name:"coord",
                title:"x,y反转"
            },
            {
                type:"string",
                name:"scale",
                title:"度量"
            },
            // {
            //     type:"boolean",
            //     name:"showToolTip",
            //     title:"隐藏提示"
            // },
        ],
        "line":[
            {
                type:"json",
                name:"data",
                title:"数据"
            },
            {
                type:"string",
                name:"width",
                title:"宽度"
            },
            {
                type:"string",
                name:"height",
                title:"高度"
            },
            {
                type:"string",
                name:"filedX",
                title:"x轴字段"
            },
            {
                type:"string",
                name:"filedY",
                title:"y轴字段"
            },
            {
                type:"string",
                name:"color",
                title:"分类字段"
            },
            // {
            //     type:"boolean",
            //     name:"adjust",
            //     title:"多列横向"
            // },
            {
                type:"string",
                name:"scale",
                title:"度量"
            },
            {
                type:"boolean",
                name:"coord",
                title:"x,y反转"
            }
            // {
            //     type:"boolean",
            //     name:"showToolTip",
            //     title:"隐藏提示"
            // },
        ],
        "button":[
            {
                type:"string",
                name:"children",
                title:"按钮内容"
            },
            {
                title:"按钮类型",
                type:"radioGroup",
                name:"type",
                data:[{
                    label:"主要",
                    value:"primary",
                },
                {
                    label:"次要",
                    value:"dashed",
                },
                {
                    label:"普通",
                    value:"link",
                }],
               
            },
            {
                title:"按钮大小",
                type:"radioGroup",
                name:"size",
                data:[
                    {
                        label:"大",
                        value:"large",
                    },
                    {
                        label:"中",
                        value:"middle",
                    },
                    {
                        label:"小",
                        value:"small",
                    }
                ]
            }
        ]
    }
    Object.keys(obj).forEach(v=>{
        obj[v].push({
            type:"string",
            name:"id",
            title:"节点id"
        })
        obj[v].push({
            type:"string",
            name:"key",
            title:"节点key"
        })
        obj[v].push({
            type:"string",
            name:"className",
            title:"样式类名"
        })
    })
    Object.keys(obj).forEach(v=>{
        if(v!=="page"){
            obj[v].push({
                type:"boolean",
                name:"ishide",
                title:"隐藏节点"
            })
        }
    });
    return obj[type];
}