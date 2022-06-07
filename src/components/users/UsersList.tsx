import React, {useEffect, useState, createContext, useMemo} from 'react'
import Grid from '@mui/material/Grid'
import Filter from './UsersFilter'
import UsersListRow from './UsersListRow'
import {useSelector, useDispatch} from 'react-redux'
import {getUsers, filterUsers} from '../../store/users/users.actions'
import {usersSelector} from '../../store/users/users.selector'

type Props = {}
export const UsersContext = createContext < any > ([])

const UsersList = (props : Props) => {

    const [filter, setFilter] = useState({country: ''})
    const {country} = filter;

    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUsers())
    }, [])

    const {users} = useSelector(usersSelector)
    const handleChangeData = (data : object) => {
        console.log({data})
        return setFilter({
            ...filter,
            ...data
        })
    }

    const handleFilterData = async() => {
        return await dispatch(filterUsers(country))
    }

    const handleLoadData = async() => {
        setFilter({country: ''})
        return await dispatch(filterUsers(''))
    }
    let value = useMemo(() => [
        handleChangeData, handleFilterData, handleLoadData, filter
    ], [handleChangeData, handleFilterData, handleLoadData, filter]);

    return (
        <UsersContext.Provider value={value}>
            <Grid container spacing={4} mt='2em'>
                <Grid item xs={12}>
                    <Filter/>
                </Grid>
                <Grid item xs={11}>
                    {users?.map((item : any) => (<UsersListRow key={item._id} data={item}/>))}
                </Grid>
            </Grid>
        </UsersContext.Provider>
    )
}

export default UsersList