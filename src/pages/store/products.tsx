import { useTable } from "@pankod/refine-core";
import {
    Box,
    Typography,
} from "@pankod/refine-mui";

import { ProductCard } from "components";
import Pagination from "components/common/Pagination";
import Sort from "components/common/Sort";
import Filter from "components/common/Filter";
import bg from '../../assets/men2.avif'
import '../store/styles/products.css'

const AllProperties = () => {

    var path = window.location.pathname.split('/');
    const category_name = path[4];
    const {
        tableQueryResult: { data, isLoading, isError },
        current,
        pageSize,
        setCurrent,
        setPageSize,
        pageCount,
        sorter,
        setSorter,
        filters,
        setFilters,
    } = useTable();

    const allProducts = data?.data ?? [];

    if (isLoading) return <Typography>Loading...</Typography>;
    if (isError) return <Typography>Error...</Typography>;

    return (
        <>

            <div className="filter_nav"
                style={{

                }}
            >
                <Sort sorter={sorter} setSorter={setSorter} />
                <Filter filters={filters} setFilters={setFilters} />
            </div>

            <Box mt="20px" sx={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
                {(allProducts.length !== 0) ? allProducts.map((data) => (
                    <ProductCard
                        key={data.prdt_id}
                        c_name={category_name}
                        p_id={data.prdt_id}
                        p_name={data.product_name}
                        p_details={data.product_details}
                        p_cost={data.product_cost}
                        photo={`http://localhost:9000/img/${data.prdt_id}`}
                    />
                )) : <h3>No products found !! .. </h3>}
            </Box>

            <Pagination current={current} pageSize={pageSize} pageCount={pageCount} setPageSize={setPageSize} setCurrent={setCurrent} />
        </>





    );
};

export default AllProperties;
