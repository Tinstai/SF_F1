import React from "react";

import { YMaps, Map } from "react-yandex-maps";

function Yandex() {

        return (
            <YMaps>
                 <div>
                     <Map defaultState={{ center: [55.755864, 37.617698], zoom: 9}} />
                 </div>
            </YMaps>
        );
}

export default Yandex;