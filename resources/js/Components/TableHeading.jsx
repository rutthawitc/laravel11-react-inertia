import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/16/solid";

const TableHeading = ({
    name,
    sortable = true,
    sort_field = null,
    sort_direction = null,
    sortChanged = () => {},
    children,
}) => {
    return (
        <th onClick={(e) => sortChanged(name)}>
            <div className="px-2 py-2 flex items-center justify-between gap-1  hover:cursor-pointer">
                {children}
                {sortable && (
                    <div>
                        <ChevronUpIcon
                            className={
                                "w-4 " +
                                (sort_field === name && sort_direction === "asc"
                                    ? "text-purple-400 "
                                    : " ")
                            }
                        />
                        <ChevronDownIcon
                            className={
                                "w-4 -mt-2 " +
                                (sort_field === name &&
                                sort_direction === "desc"
                                    ? "text-purple-400 "
                                    : " ")
                            }
                        />
                    </div>
                )}
            </div>
        </th>
    );
};

export default TableHeading;
