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
      <div style={{ width: '100%' }}>
        <table 
          className="tw-w-full tw-border-separate tw-border-spacing-y-4 tw-relative"
          style={{ borderCollapse: 'separate' }}
        >
          <thead>
            <tr>
              {columns.map((col, index) => (
                <th 
                  key={index} 
                  className="tw-p-4 tw-text-left tw-border-b tw-border-[#ECECEC]"
                >
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr
                key={row[rowKey]} 
                className="tw-bg-[#ffffff] tw-rounded-[10px] tw-h-[80px]"
              >
                {columns.map((col, index) => (
                  <td 
                    key={index} 
                    className="tw-p-4 tw-border-y-[1px] tw-border-[#ECECEC] first:tw-border-l-[1px] last:tw-border-r-[1px] tw-h-[80px]"
                    style={col.style}
                  >
                    {col.render 
                      ? col.render(row[col.accessor] ?? '-', row) 
                      : row[col.accessor] ?? '-'}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="tw-mt-5">
        <PaginationBlock currentPage={1} totalPages={10} />
      </div>
    </Container>
  );
};

export default DashBoardTable;
