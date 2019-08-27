import React, from "react";

export default (OriginalComponent) => {
    class MixedComponent extends Component{
        render(){
            return <OriginalComponent />
        }
    }
    return MixedComponent;
}