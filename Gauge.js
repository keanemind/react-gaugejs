import React, {useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
import {Gauge as CanvasGauge, Donut} from 'gaugeJS/dist/gauge.min';

/**
 * React wrapper for GaugeJS.
 * @param {*} props
 * @return {Object} React element
 */
function Gauge(props) {
  const canvas = useRef();
  const gauge = useRef();

  useEffect(() => {
    gauge.current = (
      props.donut ? new Donut(canvas.current) : new CanvasGauge(canvas.current)
    );
  }, [props.donut]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    gauge.current.setOptions(props.options);
  }, [props.options]);

  useEffect(() => {
    gauge.current.maxValue = props.maxValue;
  }, [props.maxValue]);

  useEffect(() => {
    gauge.current.setMinValue(props.minValue);
  }, [props.minValue]);

  useEffect(() => {
    gauge.current.animationSpeed = props.animationSpeed;
  }, [props.animationSpeed]);

  useEffect(() => {
    gauge.current.set(props.value);
  }, [props.value]);

  return (
    <canvas ref={canvas}></canvas>
  );
}

Gauge.defaultProps = {
  maxValue: 3000,
  minValue: 0,
  animationSpeed: 32,
  options: {
    angle: 0.15,
    lineWidth: 0.44,
    radiusScale: 1,
    pointer: {
      length: 0.6,
      strokeWidth: 0.035,
      color: '#000000',
    },
    limitMax: false,
    limitMin: false,
    colorStart: '#6FADCF',
    colorStop: '#8FC0DA',
    strokeColor: '#E0E0E0',
    generateGradient: true,
    highDpiSupport: true,
  },
  donut: false,
};

Gauge.propTypes = {
  maxValue: PropTypes.number.isRequired,
  minValue: PropTypes.number.isRequired,
  animationSpeed: PropTypes.number.isRequired,
  options: PropTypes.object.isRequired,
  donut: PropTypes.bool.isRequired,
  value: PropTypes.number.isRequired,
};

export default Gauge;
