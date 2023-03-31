
export interface Props{
    image: string
}
export default function Icon({image}:Props){
    return <div>
        <img src={image} className="icon" alt="logo"/>

    </div>
    }