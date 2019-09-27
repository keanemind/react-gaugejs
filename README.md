# react-gaugejs
React wrapper for [gauge.js](https://bernii.github.io/gauge.js/)

There is support for getting the value of the gauge counter as it is incrementing (as seen in the demos on the gauge.js website) through the handleResultTextChange callback prop. Note that this feature relies on [MutationObserver](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver), which may not be compatible with older browsers.

## Installation
```
npm install react-gaugejs
```

## Usage
See the [gauge.js website](https://bernii.github.io/gauge.js/) for explanations of the props.
```
import Gauge from 'react-gaugejs';

class MyComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    handleResultTextChange(value) {
        this.setState({value: value});
    }

    render() {
        return (
            <>
                <p>Value: {this.state.value}</p>
                <Gauge
                    value={750}
                    minValue={0}
                    maxValue={1000}
                    animationSpeed={32}
                    options={{
                        angle: 0.35,
                        lineWidth: 0.1,
                        radiusScale: 1,
                        pointer: {
                            length: 0.6,
                            strokeWidth: 0.035,
                            color: '#000000',
                        },
                        limitMax: false,
                        limitMin: false,
                        colorStart: '#6F6EA0',
                        colorStop: '#C0C0DB',
                        strokeColor: '#EEEEEE',
                        generateGradient: true,
                        highDpiSupport: true,
                    }}
                    textChangeHandler={handleResultTextChange}
                    donut

                    // any other props are passed through to the canvas element
                    className='gauge-canvas'
                    style={{height: '150px'}}
                />
            </>
        );
    }
}
```
