import React from 'react'
import { database } from '../services/firebase'
import { ref, child, get } from 'firebase/database'
import { useEffect } from 'react'
import { useState } from 'react'
import Link from 'next/link'
import DataTable from 'react-data-table-component';
import authenticate from './api/auth'


export default function FirebaseGameSuitTable(params) {
    const [data, setData] = useState({})

    const columns = [
        {
            name: 'User ID',
            selector: row => row.userId,
        },
        {
            name: 'Name',
            selector: row => row.email,
        },
        {
            name: 'Total Game',
            selector: row => row.total_game,
        },
        {
            name: 'Total Point',
            selector: row => row.total_point,
        },
        {
            name: 'Pick Bot',
            selector: row => row.game_record.pick_bot,
        },
        {
            name: 'Pick Player',
            selector: row => row.game_record.pick_player,
        },
        {
            name: 'Winner',
            selector: row => row.game_record.pick_winner,
        },
    ];

    const dataTable = async () => {
        try {
            const db = await get(child(ref(database),'GameSuitHistory/'))
            setData(db.val())
            console.log(db,"==> ini datanya");
        } catch (error) {
            console.log(error);
        }
    }
       
    useEffect(()=>{
        dataTable()
        console.log('test');
        authenticate();
    })
    return(
        <div className='BackgroundBody'>
        <div className='container'>
        <Link href="/game-suit">
            <button type="button" className="btn btn-light Back">Back</button>
        </Link>
        {
            data != null && 
            <DataTable
            columns={columns}
            data={data.record}
            />
        }
        </div>
        </div>
    )
}