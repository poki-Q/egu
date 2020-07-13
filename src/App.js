import React, { Component } from 'react';
import {Route,Switch, Redirect,NavLink } from 'react-router-dom';
import { Button } from 'antd';
import {HomeOutlined,UserOutlined,ShoppingCartOutlined,AppstoreOutlined,CreditCardOutlined  } from '@ant-design/icons';
import Home from './page/Home';
import Category from './page/Category';
import Mine from './page/Mine';
import Cart from './page/Cart';
import Card from './page/Card';

import 'antd/dist/antd.css';
import './App.css';

class App extends Component{
    state={
      tabarList:[
          {
              id:1,
              title:'首页',
              path:"/home",
              icon:<HomeOutlined style={{fontSize:22,margin:"3px 0 0 2px"}} />
          },
          {
            id:2,
            title:'分类',
            path:"/category",
            icon:<AppstoreOutlined  style={{fontSize:"22px",margin:"4px 0 0 2px"}} />
        },
        {
            id:3,
            title:'卡兑换',
            path:"/card",
            icon:<CreditCardOutlined   style={{fontSize:"22px",margin:"4px 0 0 8px"}} />
        },
        {
            id:4,
            title:'购物车',
            path:"/cart",
            icon:<ShoppingCartOutlined style={{fontSize:22,margin:"3px 0 0 4px"}} />
        },
        {
            id:5,
            title:'我的',
            path:"/mine",
            icon:<UserOutlined style={{fontSize:22,margin:"3px 0 0 1px"}} />
        }
      ],
    //   current:0
    }
    render() {
        let {tabarList} = this.state
        return (
            <div className="container" >
               <div className="tabbar">
                   <div className="tabbar-content">
                       {
                         tabarList.map(item => <NavLink
                            activeClassName="current"   
                            className="link"
                            key={item.id} 
                            to={item.path}>
                                {item.icon}
                                <p>{item.title}</p>
                            </NavLink>)  
                       }
                   </div>
               </div>
              
                
                <Switch>
                    <Route path='/home' component={Home} />
                    <Route path='/category' component={Category} />
                    <Route path='/card' component={Card} />
                    <Route path='/cart' component={Cart} />
                    <Route path='/mine' component={Mine} />
                    <Route path='/notfound' component={()=> <div>notFound 404</div> } />
                    <Redirect form='/' to='/home' exact />
                    <Redirect  to='/notfound'  />
                </Switch>
            </div>
        )
    }
}

export default App;