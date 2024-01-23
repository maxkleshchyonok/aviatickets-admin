import { Box } from "@mui/material"
import DeleteIcon from "@mui/icons-material/Delete"
import { DataGrid, GridActionsCellItem, GridColDef, GridPreProcessEditCellProps, GridRenderEditCellParams, GridRowId } from "@mui/x-data-grid"
import { EditInputCell } from "./edit-input-cell.comp"
import { useState } from "react"

export const UsersTable = () => {
    const [paginationModel, setPaginationModel] = useState({
        page: 0,
        pageSize: 25,
    });

    const handleRowUpdate = (updatedRow: any, originalRow: any) => {
        console.log('Updated row', updatedRow);
        console.log('Original row', originalRow);
        return updatedRow
    }

    const handleDeleteClick = (id: GridRowId) => {
        console.log(id)
    }

    const columns: GridColDef[] = [
        {
            field: 'firstName',
            headerName: 'First Name',
            type: 'string',
            editable: true,
            align: 'left',
            headerAlign: 'left',
            width: 200,
            preProcessEditCellProps: (params: GridPreProcessEditCellProps) => {
                const hasError = params.props.value.length > 50;
                return { ...params.props, error: hasError }
            },
            renderEditCell: (params: GridRenderEditCellParams) => <EditInputCell {...params} />
        },
        {
            field: 'lastName',
            headerName: 'Last Name',
            type: 'string',
            editable: true,
            align: 'left',
            headerAlign: 'left',
            width: 200,
            preProcessEditCellProps: (params) => {
                const hasError = params.props.value.length > 50;
                return { ...params.props, error: hasError }
            },
            renderEditCell: (params: GridRenderEditCellParams) => <EditInputCell {...params} />
        },
        {
            field: 'email',
            headerName: 'Email',
            type: 'string',
            editable: false,
            align: 'left',
            headerAlign: 'left',
            width: 200
        },
        {
            field: 'createdAt',
            headerName: 'Created At',
            type: 'dateTime',
            editable: false,
            align: 'left',
            headerAlign: 'left',
            width: 200
        },
        {
            field: 'updatedAt',
            headerName: 'Updated At',
            type: 'dateTime',
            editable: false,
            align: 'left',
            headerAlign: 'left',
            width: 200
        },
        {
            field: 'actions',
            type: 'actions',
            headerName: 'Actions',
            width: 100,
            cellClassName: 'actions',
            getActions: ({ id }: any) => {
                return [
                    <GridActionsCellItem
                        icon={<DeleteIcon />}
                        label="Delete"
                        onClick={() => handleDeleteClick(id)}
                        color="inherit"
                    />,
                ];
            },
        }
    ]

    const rows = [
        {
            id: '1',
            firstName: 'Ryu',
            lastName: 'Yushkevich',
            email: 'ryu@gmail.com',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            id: '2',
            firstName: 'Ilya',
            lastName: 'Yushkevich',
            email: 'iiiiii@gmail.com',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            id: '3',
            firstName: 'ASFAsdad',
            lastName: 'pjfgobnasd',
            email: 'asdagdsfsdf@gmail.com',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            id: '4',
            firstName: 'Ryu',
            lastName: 'Yushkevich',
            email: 'ryu@gmail.com',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            id: '5',
            firstName: 'Ilya',
            lastName: 'Yushkevich',
            email: 'iiiiii@gmail.com',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            id: '6',
            firstName: 'Ryu',
            lastName: 'Yushkevich',
            email: 'ryu@gmail.com',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            id: '7',
            firstName: 'Ilya',
            lastName: 'Yushkevich',
            email: 'iiiiii@gmail.com',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            id: '8',
            firstName: 'ASFAsdad',
            lastName: 'pjfgobnasd',
            email: 'asdagdsfsdf@gmail.com',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            id: '9',
            firstName: 'Ryu',
            lastName: 'Yushkevich',
            email: 'ryu@gmail.com',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            id: '10',
            firstName: 'Ilya',
            lastName: 'Yushkevich',
            email: 'iiiiii@gmail.com',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            id: '11',
            firstName: 'Ryu',
            lastName: 'Yushkevich',
            email: 'ryu@gmail.com',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            id: '12',
            firstName: 'Ilya',
            lastName: 'Yushkevich',
            email: 'iiiiii@gmail.com',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            id: '13',
            firstName: 'ASFAsdad',
            lastName: 'pjfgobnasd',
            email: 'asdagdsfsdf@gmail.com',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            id: '14',
            firstName: 'Ryu',
            lastName: 'Yushkevich',
            email: 'ryu@gmail.com',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            id: '15',
            firstName: 'Ilya',
            lastName: 'Yushkevich',
            email: 'iiiiii@gmail.com',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            id: '16',
            firstName: 'Ryu',
            lastName: 'Yushkevich',
            email: 'ryu@gmail.com',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            id: '17',
            firstName: 'Ilya',
            lastName: 'Yushkevich',
            email: 'iiiiii@gmail.com',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            id: '18',
            firstName: 'ASFAsdad',
            lastName: 'pjfgobnasd',
            email: 'asdagdsfsdf@gmail.com',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            id: '19',
            firstName: 'Ryu',
            lastName: 'Yushkevich',
            email: 'ryu@gmail.com',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            id: '20',
            firstName: 'Ilya',
            lastName: 'Yushkevich',
            email: 'iiiiii@gmail.com',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            id: '21',
            firstName: 'Ryu',
            lastName: 'Yushkevich',
            email: 'ryu@gmail.com',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            id: '22',
            firstName: 'Ilya',
            lastName: 'Yushkevich',
            email: 'iiiiii@gmail.com',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            id: '23',
            firstName: 'ASFAsdad',
            lastName: 'pjfgobnasd',
            email: 'asdagdsfsdf@gmail.com',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            id: '24',
            firstName: 'Ryu',
            lastName: 'Yushkevich',
            email: 'ryu@gmail.com',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            id: '25',
            firstName: 'Ilya',
            lastName: 'Yushkevich',
            email: 'iiiiii@gmail.com',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            id: '26',
            firstName: 'Ilya',
            lastName: 'Yushkevich',
            email: 'iiiiii@gmail.com',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
    ]


    return (
        <Box sx={{ width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                editMode='row'
                processRowUpdate={handleRowUpdate}
                onProcessRowUpdateError={(error) => console.log('Error', error)}
                paginationMode='server'
                paginationModel={paginationModel}
                onPaginationModelChange={setPaginationModel}
                pageSizeOptions={[25]}
            />
        </Box>
    )
}