import React from "react";
import "../../assets/less/salarydetailpage.less"
import {Toast} from "antd-mobile";
import {FetchHttp} from "../../http/FetchHttp";

class SalaryDetailPage extends React.Component<any,any>{
    constructor(props: any, context: any) {
        super(props, context);
        this.state = {
            params:new URLSearchParams(this.props.location.search),
            isOpenFeedback:true,//问题反馈功能是否开启
            isConfirm:false,//是否确认
            isFeedback:false,//是否反馈
            isOverTime:false,//是否超过反馈时间
            income:{name:"",value:""},
            remark:{name:"",value:""},
            salaryList:[],
        };
    }

    /*组件渲染完成，只执行一次*/
    componentWillMount() {
        // let urlSearchParams = new URLSearchParams(this.props.location.search);
        console.log(this.props);
        new FetchHttp().post('/gateway/api/salary/detail/v4',{"month":1514736000000,"part":1})
            .then((res:any)=>{
                console.log(res);
                this.setState({
                    income:res.income,
                    remark:res.remark,
                    salaryList:res.salaryList,
                });
            }).catch(e=>{
            console.log(e)
        })
    }

    render() {
        return (
            <div>
                <div className='salary-background'>
                    <div className='salary-total'>
                        <img className='salary-total-image' src={require('../../assets/images/salary_money.png')} alt=''/>
                        <span className='salary-total-text'>{this.state.income.name}</span>
                    </div>
                    <div className='salary-money'>{this.state.income.value}</div>
                    <div className='salary-name-month'>
                        <div className='salary-name'>{this.state.params.get("name")}</div>
                        <div className='salary-month'>2019-05(2)工资</div>
                    </div>
                </div>
                <div>
                    {this.state.salaryList.map((item: any,i:any) => (
                        <div className="salary-item" key={i}>
                            <div className='salary-item-title'>{item.title}</div>
                            {item.salaryItemList.map((map: any,j:any) => (
                                <div className="salary-item-map" key={j} >
                                    <div className="salary-item-name">{map.name}</div>
                                    <div className="salary-item-value">{map.value}</div>
                                </div>
                            ))}
                        </div>
                    ))}
                    <div className="salary-item-name">{this.state.remark.name}</div>
                    <div className="salary-item-value">{this.state.remark.value}</div>
                </div>
                <div className='salary-feedback'>
                    <div style={{display:this.state.isOpenFeedback?'block':'none'}} className='salary-feedback-question' onClick={this.onFeedback}>有疑问？</div>
                    <div style={{backgroundColor:this.state.isConfirm?'#999999':'#00BF93'}} className='salary-feedback-confirm' onClick={this.onConfirm}>确认</div>
                </div>
            </div>
        );
    }
    onFeedback = () =>{
        if(!this.state.isFeedback&&this.state.isOverTime){
            Toast.show('有效反馈时间为7天，已过期')
        }else {
            window.location.href = '#/feedback'
        }
    };
    onConfirm = () =>{
        this.setState({
            isConfirm:true,
        });
    };
}
export default SalaryDetailPage;
