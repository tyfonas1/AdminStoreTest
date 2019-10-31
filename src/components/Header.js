import React, { Component } from 'react'

export default class Header extends Component {
    
    
    
    render() {
        let date = new Date().getDate();
        let month = new Date().getMonth() + 1;
        let year = new Date().getFullYear();
        
        return (
            
            <div class="container-fluid">
                <div className="header">
  <div class="row">
    <div class="col-sm  ">
    <h1>Admin panel</h1>
    </div>
    
    
    
    <div class="col-lg-2 col-sm-4 col-md-3 pt-2">
    <h3>{date}/{month}/{year}</h3>
    </div>
  </div>
</div>
</div>


            
        )
    }
}
