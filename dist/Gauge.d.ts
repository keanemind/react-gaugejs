import React from 'react';

export interface GaugeProps {
    maxValue: number,
    minValue: number,
    animationSpeed: number,
    options: object,
    donut: boolean,
    value: number,
    textChangeHandler: Function,
}

declare const Gauge: React.FunctionComponent<GaugeProps>

export default Gauge
