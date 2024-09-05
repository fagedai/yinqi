import { ref } from 'vue'
import { ElTable } from 'element-plus'

export default function useItem() {
    interface User {
        material: string
        date: string
        univate: float
        number: number
        count: number
    }

    const multipleTableRef = ref<InstanceType<typeof ElTable>>()
    const multipleSelection = ref<User[]>([])
    const toggleSelection = (rows?: User[]) => {
        if (rows) {
            rows.forEach((row) => {
                multipleTableRef.value!.toggleRowSelection(row, undefined)
            })
        } else {
            multipleTableRef.value!.clearSelection()
        }
    }
    const handleSelectionChange = (val: User[]) => {
        multipleSelection.value = val
    }

    const tableData: User[] = [
        {
            material: 'PLA(普通)',
            date: '2024.9.5',
            univate: '0.25',
            number: 10,
            count: 100,
        },
        {
            material: 'PLA(普通)',
            date: '2024.9.5',
            univate: '0.25',
            number: 10,
            count: 100,
        },
        {
            material: 'PLA(普通)',
            date: '2024.9.5',
            univate: '0.25',
            number: 10,
            count: 100,
        },
        {
            material: 'PLA(普通)',
            date: '2024.9.5',
            univate: '0.25',
            number: 10,
            count: 100,
        },
        {
            material: 'PLA(普通)',
            date: '2024.9.5',
            univate: '0.25',
            number: 10,
            count: 100,
        },
    ]

    return { multipleTableRef, tableData, toggleSelection, handleSelectionChange, multipleSelection }
}