import React, { useState } from 'react';
import '../App.css';
import Table from 'react-bootstrap/Table';

const CavityGrid2 = ({ column, NewRow2 }) => {

    let [Total, setTotal] = useState([]);
    let [Average, setAverage] = useState([]);
    let [Range, setRange] = useState([]);
    let [MaxPart, setMaxPart] = useState([]);
    let [MinPart, setMinPart] = useState([]);
    // let [Percentage, setPercentage] = useState([]);

    const Total_Average = () => {

        let columnTotal = [], columnAverage = [], columnRange = [], columnMaxPart = [], columnMinPart = [];

        for (let i = 1; i < column.length; i++) {

            let total = 0, average = 0, range, Range_Array = [], max, min;

            const compare = (a, b) => {
                return a - b;
            }

            for (let j = 1; j <= NewRow2.length; j++) {

                Range_Array.push(isNaN(parseFloat(NewRow2[j - 1][`value${i}`])) ? 0 : parseFloat(NewRow2[j - 1][`value${i}`]))

                total += Range_Array[j - 1]

                average = Number(total / NewRow2.length).toFixed(1)

                const Sorted_Array = Range_Array.sort(compare)
                range = Number(Sorted_Array[Sorted_Array.length - 1] - Sorted_Array[Sorted_Array.length - Sorted_Array.length]).toFixed(2)

                max = Sorted_Array[Sorted_Array.length - 1]

                min = (Sorted_Array[Sorted_Array.length - Sorted_Array.length] === 0 ? Sorted_Array[(Sorted_Array.length - Sorted_Array.length) + 1] : Sorted_Array[Sorted_Array.length - Sorted_Array.length])
            }

            columnTotal[i - 1] = total
            setTotal(columnTotal)

            columnAverage[i-1] = average
            setAverage(columnAverage)

            columnRange[i-1] = range
            setRange(columnRange)

            columnMaxPart[i-1] = max
            setMaxPart(columnMaxPart)

            columnMinPart[i-1] = min
            setMinPart(columnMinPart)
        }
    }

    return (
        <>
            <div className="Cavity-Grid-Container">
                <Table striped bordered hover responsive variant="light">
                    <thead>
                        <tr>
                            {column.map((value, key) => (
                                <>
                                    <th key={key}> <h6> {value.header} </h6> </th>
                                </>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="grid_style">
                        <tr>
                            {column.map((value1, key1) => (
                                <>
                                    {value1.edit === true ?
                                        (<td> <input type='text' className="form-control" readOnly /> </td>)
                                        :
                                        (<td> <input type='text' className="form-control" value="Total Fill" readOnly /> </td>)}
                                </>
                            ))}
                        </tr>
                        <tr>
                            {column.map((value1, key1) => (
                                <>
                                    {value1.edit === true ?
                                        (<td> <input type='text' className="form-control" readOnly /> </td>)
                                        :
                                        (<td> <input type='text' className="form-control" value="Average Fill" readOnly /> </td>)}
                                </>
                            ))}
                        </tr>
                        <tr>
                            {column.map((value1, key1) => (
                                <>
                                    {value1.edit === true ?
                                        (<td> <input type='text' className="form-control" readOnly /> </td>)
                                        :
                                        (<td> <input type='text' className="form-control" value="Range" readOnly /> </td>)}
                                </>
                            ))}
                        </tr>
                        <tr>
                            {column.map((value1, key1) => (
                                <>
                                    {value1.edit === true ?
                                        (<td> <input type='text' className="form-control" readOnly /> </td>)
                                        :
                                        (<td> <input type='text' className="form-control" value="Max Part Wt." readOnly /> </td>)}
                                </>
                            ))}
                        </tr>
                        <tr>
                            {column.map((value1, key1) => (
                                <>
                                    {value1.edit === true ?
                                        (<td> <input type='text' className="form-control" readOnly /> </td>)
                                        :
                                        (<td> <input type='text' className="form-control" value="Min Part Wt." readOnly /> </td>)}
                                </>
                            ))}
                        </tr>
                        <tr>
                            {column.map((value) => (
                                <>
                                    {value.edit === true ?
                                        (<td> <input type='text' className="form-control" value='-' readOnly /> </td>)
                                        :
                                        (<td> <input type='text' className="form-control" value="% Variation From Average" readOnly /> </td>)}
                                </>
                            ))}
                        </tr>
                        {NewRow2.map((value, key1) => (
                            <tr>
                                {column.map((value2, key) => (
                                    <>
                                        {value2.edit === false ?
                                            (<td> <input type='text' className="form-control" value={value.Cavity_No} readOnly /> </td>)
                                            :
                                            (<td> <input type='text' className="form-control" readOnly /> </td>)
                                        }
                                    </>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </>
    )
}

export default CavityGrid2;