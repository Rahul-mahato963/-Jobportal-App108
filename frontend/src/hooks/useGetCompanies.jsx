import { setCompanies } from "@/redux/companySlice";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
const api=import.meta.env.VITE_API_URL;

const useGetCompanies = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchCompany = async () => {
            try {
                axios.defaults.withCredentials = true;
                const res = await axios.get(`${api}/api/company/getcompany`);
                dispatch(setCompanies(res.data.companies));
            } catch (error) {
                console.log(error);
            }
        }
        fetchCompany();
    }, []);
};
export default useGetCompanies;