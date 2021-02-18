import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import '../styles/appleItem.scss';


//把apple注入到组件 prop当中
@inject("apple")
//observer 函数/装饰器可以用来将 React 组件转变成响应式组件
@observer
class AppleItem extends Component {

    render() {
        let { apple, eatApple } = this.props;

        return (
            <div className="appleItem">
                <div className="apple"><img src={require('../images/apple.png')} alt=""/></div>
                <div className="info">
                    <div className="name">红苹果 - { apple.id }号</div>
                    <div className="weight">{ apple.weight }克</div>
                </div>
                <div className="btn-div">
                    <button onClick={()=>eatApple(apple.id)}> 吃掉 </button>
                </div>
            </div>
        );
    }
}



export default AppleItem;