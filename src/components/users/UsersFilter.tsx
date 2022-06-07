import React, {useContext} from "react";
import Grid from "@mui/material/Grid";
import SelectInput from "./UsersCountrySelect";
import {selectData} from "../forms/selectData";
import Button from "@mui/material/Button";
import {useSelector} from "react-redux";
import {usersSelector} from "../../store/users/users.selector";
import {UsersContext} from "./UsersList";

type Props = {};

const Filter : React.FC < Props > = () => {

    const {countries} = useSelector(usersSelector);
    console.log({countries})
    const [handleChangeData,
        handleFilterData,
        handleReset] = useContext(UsersContext);
    return (
        <Grid container justifyContent={"center"} spacing={4}>
            {selectData({optionsCountries: countries}).map((data : {
                options: any;
                name: string;
                title: string;
            }, i : number) => (
                <Grid item xs={2} key={i}>
                    <SelectInput
                        name={data.name}
                        title={data.title}
                        options={data.options}
                        handleFilter={handleChangeData}/>
                </Grid>
            ))}

            <Grid item xs={2} display="flex" textAlign="center" sx={{
                alignSelf: "center",
                justifyContent: "flex-end"
            }}>
                <Button variant="contained" onClick={handleFilterData}>
                    Filter
                </Button>
            </Grid>
            <Grid item xs={2} display="flex" textAlign="center" sx={{
                alignSelf: "center",
                justifyContent: "flex-start"
            }}>
                <Button variant="contained" onClick={handleReset}>
                    Reset
                </Button>
            </Grid>
        </Grid>
    );
};

export default Filter;
