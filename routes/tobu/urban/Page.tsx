import * as React from "react";
import {useEffect, useState} from "react";
import {StationData} from "../../StationData";
import {StationsView} from "../../StationsView";

export const Page = () => {
    const [stations, setStations] = useState<StationData[]>([]);
    useEffect(() => {
        const func = async () => {
            const stationsResponse = await fetch("Unyomatome/routes/tobu/urban/stations.json");
            const stationsJson = await stationsResponse.json();
            const stations = stationsJson.stations as StationData[];
            setStations(stations);
        }
        func().then();
    }, [])
    return <>
        <h1 id="title">
            <img alt="" src="https://static.tobuspapp.jp/html/operation_tobupo/img/xxxhdpi/pos_icon_nodaline.png"/>
            <span>東武アーバンパークライン</span>
        </h1>
        <div className="line"></div>
        <div className="station-list">
            <StationsView stations={stations}/>
        </div>
    </>
};