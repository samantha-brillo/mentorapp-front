const Card = ({img,children}) => (
    <div className="card">
        {/* esto eess un if ternario y validamos si exite imagen 
            de lo contrario renderizara otra 
         */}
        {img ?
            <img src={img} alt="User" className="card-img-top"/>
            :
            ''
        }
        <div className="card-body">
            {children}
        </div>
    </div>
)
    
    export default Card;