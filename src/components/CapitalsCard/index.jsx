import { useEffect } from "react"

export const CapitalCard = () => {
    const cardsInfo = localStorage.getItem("@capitals");
    const cards = JSON.parse(cardsInfo)

   

    return (
        <>
            {cards?.map((item, i) => {
                return (
                    <div className='capitalsBox' key={i}>
                        <h4>{item.timelines.daily[0].values.temperatureApparentMin.toFixed(0)}°</h4>
                        <h4>{item.timelines.daily[0].values.temperatureApparentMax.toFixed(0)}°</h4>
                        <h4>{item.location.name.split(",")[0]}</h4>
                    </div>

                )
            })}
        </>
    )
}