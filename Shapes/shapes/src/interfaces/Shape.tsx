interface ShapeProperties{
    height?: number,
    width?: number,
    isCircle: boolean,
    diameter?: number,
};

export function Shape(props:ShapeProperties){
    let className="Shape" + props.isCircle ? "Circle" : ""
    
    return (
        <div style={{height: props.height, width: props.width}}></div>
    );
};