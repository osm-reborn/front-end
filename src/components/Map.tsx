import type { FunctionComponent } from 'react';

import { useAsync } from 'react-async';

interface MapProps {
    x: number,
    y: number,
    z: number,
};

const runSql = async() => {
    console.log('run sql queries')
};

const Map: FunctionComponent<MapProps> = ({x, y, z}) => {
    runSql();
    
    return (
        <p>({x}, {y}, {z})</p>
    );
};

export default Map;