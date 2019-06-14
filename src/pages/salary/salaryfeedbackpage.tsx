import React from "react";
import "../../assets/less/salaryfeedbackpage.less"
import {TextareaItem} from "antd-mobile";

class SalaryFeedbackPage extends React.Component<any,any>{
    constructor(props: any, context: any) {
        super(props, context);
        this.state = {
            day:7,
            text:'asdad',
            editable:true,
        };
    }
    render(){
        return <div>
            <div className='feedback-day'>
                {this.state.editable>0?'您反馈的问题将提交到HR端，反馈有效期限还有'+this.state.day+'天':'有效反馈时间为7天，已过期'}
            </div>
            <TextareaItem editable={this.state.editable} className='feedback-input' count={100} rows={5} placeholder='请输入'
            defaultValue={this.state.editable?'':this.state.text}/>
            <div style={{display:this.state.editable?'block':'none'}} className='salary-feedback-commit'>提交</div>
        </div>
    }
}
export default SalaryFeedbackPage;
