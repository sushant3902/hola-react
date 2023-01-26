export function filterData(searchText, restaurants) {
    const filterData = restaurants.filter((res) => {
        return res?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
    });

    return filterData;
}