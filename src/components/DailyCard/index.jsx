
export const NextDay = ({data}) => {
    
    const getDay = new Date(data?.time)
    const weekDays = ["Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sábado"];

    const whatDay = weekDays[getDay.getUTCDay()];

    return (
        <>
        
        <div className="boxNextDays">
            <h3>{whatDay}</h3>
            <div className="boxTemp">
                <p>{data.values.temperatureMin.toFixed(0)}°C</p>
                <p>{data.values.temperatureMax.toFixed(0)}°C</p>
            </div>
        
        </div>
        </>
    )
}