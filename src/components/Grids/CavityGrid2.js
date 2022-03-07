import React, { useState } from 'react';
import '../App.css';
import Table from 'react-bootstrap/Table';

const CavityGrid2 = ({ column, NewRow2 }) => {

    let [Total, setTotal] = useState([]);
    let [Average, setAverage] = useState([]);
    let [Range, setRange] = useState([]);
    let [MaxPart, setMaxPart] = useState([]);
    let [MinPart, setMinPart] = useState([]);
    let [Percentage, setPercentage] = useState([]);

    const Total_Average = () => {

        let columnTotal = [], columnAverage = [], columnRange = [], columnMaxPart = [], columnMinPart = [], columnPercent = [];

        for (let i = 1; i < column.length; i++) {

            let total = 0, average = 0, range, Range_Array = [], max, min, percent = [];

            const compare = (a, b) => {
                return a - b;
            }

            for (let j = 1; j <= NewRow2.length; j++) {

                Range_Array.push(isNaN(parseFloat(NewRow2[j - 1][`value${i}`])) ? 0 : parseFloat(NewRow2[j - 1][`value${i}`]))

                total += Range_Array[j - 1]

                average = Number(parseFloat(total) / parseInt(NewRow2.length)).toFixed(3)

                const Sorted_Array = Range_Array.sort(compare)
                range = Number(Sorted_Array[Sorted_Array.length - 1] - Sorted_Array[Sorted_Array.length - Sorted_Array.length]).toFixed(2)

                max = Sorted_Array[Sorted_Array.length - 1]

                min = (Sorted_Array[Sorted_Array.length - Sorted_Array.length] === 0 ? Sorted_Array[(Sorted_Array.length - Sorted_Array.length) + 1] : Sorted_Array[Sorted_Array.length - Sorted_Array.length])

            }

            for (let k = 1; k <= NewRow2.length; k++) {
                percent.push(isNaN((Range_Array[k - 1] - average) * 100 / average) ? 0 : Number(((Range_Array[k - 1] - average) * 100 / average).toFixed(3)))
            }

            columnPercent[i - 1] = percent
            setPercentage(columnPercent)

            columnTotal[i - 1] = total
            setTotal(columnTotal)

            columnAverage[i - 1] = average
            setAverage(columnAverage)

            columnRange[i - 1] = range
            setRange(columnRange)

            columnMaxPart[i - 1] = max
            setMaxPart(columnMaxPart)

            columnMinPart[i - 1] = min
            setMinPart(columnMinPart)
        }
    }

    return (
        <>
            <div className='mb-4'>
                <button className="btn btn-pill btn-secondary btn-air-secondary mr-4" type="button" onClick={Total_Average}> Calculate </button>
            </div>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='row'>
                            <div>
                                <div className="Cavity-Grid-Container">
                                    <div>
                                        <Table striped bordered hover responsive variant="light">
                                            <thead>
                                                <tr>
                                                    {column.map((value, key) => (
                                                        <>
                                                            <th key={key}> <span> {value.header} </span> </th>
                                                        </>
                                                    ))}
                                                </tr>
                                            </thead>
                                            <tbody className="grid_style">
                                                <tr>
                                                    {column.map((value1, key1) => (
                                                        <>
                                                            {value1.edit === true ?
                                                                (<td> <input type='text' className="form-control" value={Total[key1 - 1]} readOnly /> </td>)
                                                                :
                                                                (<td> <input type='text' className="form-control" value="Total Fill" readOnly /> </td>)}
                                                        </>
                                                    ))}
                                                </tr>
                                                <tr>
                                                    {column.map((value1, key1) => (
                                                        <>
                                                            {value1.edit === true ?
                                                                (<td> <input type='text' className="form-control" value={Average[key1 - 1]} readOnly /> </td>)
                                                                :
                                                                (<td> <input type='text' className="form-control" value="Average Fill" readOnly /> </td>)}
                                                        </>
                                                    ))}
                                                </tr>
                                                <tr>
                                                    {column.map((value1, key1) => (
                                                        <>
                                                            {value1.edit === true ?
                                                                (<td> <input type='text' className="form-control" value={Range[key1 - 1]} readOnly /> </td>)
                                                                :
                                                                (<td> <input type='text' className="form-control" value="Range" readOnly /> </td>)}
                                                        </>
                                                    ))}
                                                </tr>
                                                <tr>
                                                    {column.map((value1, key1) => (
                                                        <>
                                                            {value1.edit === true ?
                                                                (<td> <input type='text' className="form-control" value={MaxPart[key1 - 1]} readOnly /> </td>)
                                                                :
                                                                (<td> <input type='text' className="form-control" value="Max Part Wt." readOnly /> </td>)}
                                                        </>
                                                    ))}
                                                </tr>
                                                <tr>
                                                    {column.map((value1, key1) => (
                                                        <>
                                                            {value1.edit === true ?
                                                                (<td> <input type='text' className="form-control" value={MinPart[key1 - 1]} readOnly /> </td>)
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
                                                                    (<td> <input type='text' className="form-control" value={Percentage[key - 1] === undefined ? ('-') : (Percentage[key - 1][key1])} readOnly /> </td>)
                                                                }
                                                            </>
                                                        ))}
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </Table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default CavityGrid2;