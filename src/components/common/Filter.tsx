import React from 'react'
import {
    Box,
    Stack,
    Typography,
    TextField,
    Select,
    MenuItem,
    ShowButton,
    Table,
    fontSize,
} from "@pankod/refine-mui";
import { useMemo } from "react";


export default function Filter({ filters , setFilters}) {

    const currentFilterValues = useMemo(() => {
        const logicalFilters = filters.flatMap((item) =>
            "field" in item ? item : [],
        );

        return {
            type:
                logicalFilters.find((item) => item.field === "type")?.value ||
                "",
        };
    }, [filters]);

  return (
    < >
        <select
            style={{
                padding:'.7%',
                fontSize:'small',
                color:'black'
            }}
            color="info"
            required
            defaultValue=""
            value={currentFilterValues.type}
            onChange={(e) => {
                setFilters(
                    [
                        {
                            field: "type",
                            operator: "eq",
                            value: e.target.value,
                        },
                    ],
                    "replace",
                );
            }}
        >
            <option value="">Select Category</option>
            {
                [ "TShirt","Jacket","Jeans"].map((type) => 
                (
                    <option key={type} value={type} >
                        {type}
                    </option>
                ))
            }

        </select>
    </>

  )
}
