import TableHeading from "@/Components/TableHeading";
import TextInput from "@/Components/TextInput";
import SelectInput from "@/Components/SelectInput";
import { TASK_STATUS_TEXT_MAP, TASK_STATUS_CLASS_MAP } from "@/constant";
import { Link, router } from "@inertiajs/react";
import Pagination from "@/Components/Pagination";

const TasksTable = ({
    tasks,
    queryParams = null,
    hideProjectColumn = false,
    success,
}) => {
    queryParams = queryParams || {};
    //searchFieldChanged function
    const searchFieldChanged = (name, value) => {
        if (value) {
            queryParams[name] = value;
        } else {
            delete queryParams[name];
        }
        router.get(route("task.index"), queryParams);
    };
    //onKeyDown function
    const onKeyPress = (name, e) => {
        if (e.key !== "Enter") return;
        searchFieldChanged(name, e.target.value);
    };

    const sortChanged = (name) => {
        if (name === queryParams.sort_field) {
            if (queryParams.sort_direction === "asc") {
                queryParams.sort_direction = "desc";
            } else {
                queryParams.sort_direction = "asc";
            }
        } else {
            queryParams.sort_field = name;
            queryParams.sort_direction = "asc";
        }
        router.get(route("task.index"), queryParams);
    };

    const deleteTaskHandler = (task, id) => {
        if (!window.confirm("Are you sure you want to delete this task?")) {
            return;
        }
        router.delete(route("task.destroy", id));
    };

    return (
        <>
            <div>
                {success && (
                    <div className="bg-emerald-400  text-white px-3 py-1 mb-3 rounded-md  font-semibold">
                        {success}
                    </div>
                )}
            </div>

            <div className="overflow-auto">
                <table className="w-full text-sm text-left rtl:text-right text-grey-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 border-b-2  border-grey-500">
                        <tr className="text-nowrap">
                            <TableHeading
                                name="id"
                                sort_field={queryParams.sort_field}
                                sort_direction={queryParams.sort_direction}
                                sortChanged={sortChanged}
                            >
                                ID
                            </TableHeading>
                            <th className="px-2 py-2">Image</th>
                            {!hideProjectColumn && (
                                <th className="px-2 py-2">Project Name</th>
                            )}
                            <TableHeading
                                name="name"
                                sort_field={queryParams.sort_field}
                                sort_direction={queryParams.sort_direction}
                                sortChanged={sortChanged}
                            >
                                Name
                            </TableHeading>
                            <TableHeading
                                name="status"
                                sort_field={queryParams.sort_field}
                                sort_direction={queryParams.sort_direction}
                                sortChanged={sortChanged}
                            >
                                Status
                            </TableHeading>
                            <TableHeading
                                name="created_at"
                                sort_field={queryParams.sort_field}
                                sort_direction={queryParams.sort_direction}
                                sortChanged={sortChanged}
                            >
                                Create At
                            </TableHeading>
                            <TableHeading
                                name="due_date"
                                sort_field={queryParams.sort_field}
                                sort_direction={queryParams.sort_direction}
                                sortChanged={sortChanged}
                            >
                                Due Date
                            </TableHeading>
                            <th className="px-2 py-2">Created By</th>
                            <th className="px-2 py-2 text-right">Actions</th>
                        </tr>
                    </thead>

                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 border-b-2  border-grey-500">
                        <tr className="text-nowrap">
                            <th className="px-2 py-2"></th>
                            <th className="px-2 py-2"></th>
                            {!hideProjectColumn && (
                                <th className="px-2 py-2"></th>
                            )}
                            <th className="px-2 py-2">
                                <TextInput
                                    className="w-full"
                                    placeholder="Search Task Name"
                                    defaultValue={queryParams.name}
                                    onBlur={(e) =>
                                        searchFieldChanged(
                                            "name",
                                            e.target.value
                                        )
                                    }
                                    onKeyPress={(e) => onKeyPress("name", e)}
                                />
                            </th>
                            <th className="px-2 py-2">
                                <SelectInput
                                    className="w-full"
                                    defaultValue={queryParams.status}
                                    onChange={(e) =>
                                        searchFieldChanged(
                                            "status",
                                            e.target.value
                                        )
                                    }
                                >
                                    <option value="">All</option>
                                    <option value="pending">Pending</option>
                                    <option value="in_progress">
                                        In Progress
                                    </option>
                                    <option value="completed">Completed</option>
                                </SelectInput>
                            </th>
                            <th className="px-2 py-2"></th>
                            <th className="px-2 py-2"></th>
                            <th className="px-2 py-2"></th>
                            <th className="px-2 py-2"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {tasks.data.map((task) => (
                            <tr className="bg-white border-b" key={task.id}>
                                <td className="px-3 py-2">{task.id}</td>
                                <td className="px-3 py-2">
                                    <img
                                        src={task.image_path}
                                        className="w-10 h-10 rounded-full"
                                    />
                                </td>
                                {!hideProjectColumn && (
                                    <td className="px-3 py-2">
                                        {task.project.name}
                                    </td>
                                )}
                                <th className="px-3 py-2 hover:underline font-light">
                                    <Link href={route("task.show", task.id)}>
                                        {task.name}
                                    </Link>
                                </th>
                                <td className="px-3 py-2">
                                    <span
                                        className={
                                            "px-2 py-1 rounded text-white " +
                                            TASK_STATUS_CLASS_MAP[task.status]
                                        }
                                    >
                                        {TASK_STATUS_TEXT_MAP[task.status]}
                                    </span>
                                </td>
                                <td className="px-3 py-2 text-nowrap">
                                    {task.created_at}
                                </td>
                                <td className="px-3 py-2 text-nowrap">
                                    {task.due_date}
                                </td>
                                <td className="px-3 py-2">
                                    {task.createdBy.name}
                                </td>
                                <td className="px-3 py-2 text-nowrap">
                                    <Link
                                        href={route("task.edit", task.id)}
                                        className="font-medium text-white hover:bg-blue-400 mx-2 bg-blue-600 py-1 px-3 rounded-md"
                                    >
                                        Edit
                                    </Link>
                                    <button
                                        onClick={(e) =>
                                            deleteTaskHandler(task, task.id)
                                        }
                                        className="font-medium text-white hover:bg-red-400 mx-2 bg-red-600 py-1 px-3 rounded-md"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Pagination links={tasks.meta.links} />
        </>
    );
};

export default TasksTable;
