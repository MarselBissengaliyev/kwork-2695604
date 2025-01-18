import { Container } from '@/components/Container';
import React from 'react';
import PaginationBlock from '../paginationBlock/PaginationBlock';

interface Column {
  header: string;
  accessor: string;
  render?: (value: any, row: any) => React.ReactNode;
  style?: React.CSSProperties;
}

interface TableProps {
  data: Array<Record<string, any>>;
  columns: Column[];
  rowKey: string; // уникальный ключ для каждой строки
}

const DashBoardTable: React.FC<TableProps> = ({ data, columns, rowKey }) => {
  return (
    <Container>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead>
        <tr>
          {columns.map((col, index) => (
            <th key={index} style={{ padding: '10px', textAlign: 'left', ...col.style }}>
              {col.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row[rowKey]}>
            {columns.map((col, index) => (
              <td key={index} style={{ padding: '10px', border: '1px solid #ddd', ...col.style }}>
                {col.render ? col.render(row[col.accessor], row) : row[col.accessor]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
    <div className='tw-mt-5'>
      <PaginationBlock currentPage={1} totalPages={10}  />
    </div>
    </Container>
    
  );
};

export default DashBoardTable;
