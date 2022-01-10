import React, { useState } from 'react'
import '../App.css';
import Table from 'react-bootstrap/Table';
import { Button } from 'reactstrap';

const CavityGrid2 = ({ column, NewRow2 }) => {

    let [Total, setTotal] = useState([]);
    let [Average, setAverage] = useState([]);
    let [Range, setRange] = useState([]);
    let [MaxPart, setMaxPart] = useState([]);
    let [MinPart, setMinPart] = useState([]);
    let [Percentage, setPercentage] = useState([]);

    let total = 0, average = 0, range, Range_Array = [], percent=[];

    const Total_Average = () => {

        for (let i = 1; i < column.length; i++) {

            const compare = (a, b) => {
                return a - b;
            }

            for (let j = 1; j <= NewRow2.length; j++) {

                total += parseFloat(NewRow2[j - 1][`value${i}`])

                average = total / NewRow2.length
                setAverage([...Average, average])

                Range_Array.push(parseFloat(NewRow2[j - 1][`value${i}`]))
                const Sorted_Array = Range_Array.sort(compare)
                range = Sorted_Array[Sorted_Array.length - 1] - Sorted_Array[Sorted_Array.length - Sorted_Array.length]
                setRange([...Range, range])

                let max = Sorted_Array[Sorted_Array.length - 1]
                setMaxPart([...MaxPart, max])

                let min = Sorted_Array[Sorted_Array.length - Sorted_Array.length]
                setMinPart([...MinPart, min])
            }

            setTotal([...Total, total])
            console.log(Total)
        }

        for(let i = 1; i <= NewRow2.length; i++){
            percent[i - 1] = ( Number(((Range_Array[i - 1] - average) * 100) / average).toFixed(3) )
        }
        // console.log(percent)
        setPercentage(percent)
    }

    return (
        <>
            <div className='mb-4'>
                <Button color="dark" onClick={Total_Average}> Calculate </Button>
            </div>
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
                                            (<td> <input type='text' className="form-control" value={Percentage[key1]} readOnly /> </td>)
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
