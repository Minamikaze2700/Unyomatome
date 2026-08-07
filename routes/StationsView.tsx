import * as React from "react";
import {StationData} from "./StationData";

type StationsViewProps = {
    stations: StationData[]
}

export const StationsView = (props: StationsViewProps) => {
    return props.stations.map((station, _) => {
        return <div className="station" key={station.id}>
            <div className={"label" + (station.isMajor ? " major_label" : "")}>
                <p className="jp" style={{
                    fontSize: "8.75cqw",
                    paddingLeft: "0",
                    letterSpacing: "3"
                }}>{station.jpName}</p>
                <p className="en">{station.enName}</p>
            </div>
        </div>
    });
}