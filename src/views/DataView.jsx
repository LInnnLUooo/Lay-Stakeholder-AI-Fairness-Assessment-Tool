
import React, { useMemo,useState,useEffect,useRef } from 'react';
import creditdata from '../data/results.json';
import {flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    PaginationState,
    getSortedRowModel,
    getFacetedUniqueValues,
    FilterFn,
    useReactTable,} from '@tanstack/react-table';
import Tooltip from '@mui/material/Tooltip';
import "../styles.css"
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';



export default function DataView(selectedID) {
  const clearFilters = () => {
    setColumnFilters([]);
  };
  
  
  // //selected ID 传进来了
    // console.log(selectedID)
    const ID =  selectedID.selectedID;
    console.log(`ID: ${ID}, Type: ${typeof ID}`);
    

    //set sutomatic scroll--> 在组件加载完毕或 ID 更改时滚动到保存的 ref
    const highlightedRowRef = useRef(null);
    const tableContainerRef = useRef(null);
    useEffect(() => {
      if (highlightedRowRef.current && tableContainerRef.current) {
        const rowHeight = highlightedRowRef.current.offsetHeight;
        const rowIndex = highlightedRowRef.current.rowIndex;
        const topPosition = (rowIndex - 1) * rowHeight;
        tableContainerRef.current.scrollTop = topPosition;
      }
    }, [ID]); 
  
  
  

    const data = useMemo(()=>creditdata,[])
    const columns = [
        { accessorKey: 'id', header: 'ID',  className: 'height-30',getCanFilter: () => true,type:'number' },//field为对应数据中的key，headerName为显示在tabel中的column name
        { accessorKey: 'Duration', header: 'Duration', className: 'height-30',getCanFilter: () => true },
        { accessorKey: 'Credit Amount', header: 'Credit Amount',  className: 'height-30',getCanFilter: () => true }, 
        { accessorKey: 'Installment Rate', header: 'Installment Rate',  className: 'height-30' ,getCanFilter: () => true,type:'number'},
        { accessorKey: 'Residence Length', header: 'Residence Length', className: 'height-30',getCanFilter: () => true,type:'number' },
        { accessorKey: 'Existing Credits', header: 'Existing Credits', className: 'height-30',getCanFilter: () => true,type:'number'  },
        { accessorKey: 'Dependents', header: 'Dependents', className: 'height-30' ,getCanFilter: () => true,type:'number'},
        { accessorKey: 'Age', header: 'Age', className: 'height-30',getCanFilter: () => true,type:'number'},

        { accessorKey: 'Gender', header: 'Gender', className: 'height-30',getCanFilter: () => true,filterFn: exactMatchFilter,
        
        },
        { accessorKey: 'Checking Account', header: 'Checking Account', className: 'height-30',getCanFilter: () => true },
        { accessorKey: 'Credit History', header: 'Credit History', className: 'height-30',getCanFilter: () => true},
        { accessorKey: 'Purpose', header: 'Purpose', className: 'height-30',getCanFilter: () => true },
        { accessorKey: 'Savings', header: 'Savings', className: 'height-30',getCanFilter: () => true },
        { accessorKey: 'Employment', header: 'Employment', className: 'height-30',getCanFilter: () => true },
        { accessorKey: 'Debtors', header: 'Debtors', className: 'height-30',getCanFilter: () => true},
        { accessorKey: 'Property', header: 'Property', className: 'height-30',getCanFilter: () => true },
        { accessorKey: 'Installment Plans', header: 'Installment Plans', className: 'height-30',getCanFilter: () => true},
        { accessorKey: 'Housing', header: 'Housing', className: 'height-30',getCanFilter: () => true},
        { accessorKey: 'Job', header: 'Job', className: 'height-30',getCanFilter: () => true}, 
        { accessorKey: 'Telephone', header: 'Telephone', className: 'height-30',getCanFilter: () => true},
        { accessorKey: 'Foreign Worker', header: 'Foreign Worker', className: 'height-30',getCanFilter: () => true},
        { accessorKey: 'Real Credit', header: 'Rated Credit', className: 'width-140 height-30 sticky-right-column3',getCanFilter: () => true,
                cell: (params) => {
                  const value = params.getValue();

                    // 根据 'Good' 或 'Bad' 的值来选择图像
                    const imageSource = value === 'Good' ? '/GoodIcon.png' : '/BadIcon.png';
            
                    return (
                        <img
                            src={imageSource}
                            alt={value}
                            style={{ maxWidth: '100%', maxHeight: '100%', display: 'block' }}
                        />
                    );
                },
        },

        {
          accessorKey: 'Predicted Credit',
          header: 'Predicted Credit',
          className: 'width-170 height-30 sticky-right-column2',
          getCanFilter: () => true,
                cell: (params) => {
                  const value = params.getValue();

                    // 根据 'Good' 或 'Bad' 的值来选择图像
                    const imageSource = value === 'Good' ? '/GoodIcon.png' : '/BadIcon.png';
            
                    return (
                        <img
                            src={imageSource}
                            alt={value}
                            style={{ maxWidth: '100%', maxHeight: '100%', display: 'block' }}
                        />
                    );
                },
      },
      

        { accessorKey: 'Probability', header: 'Probability', className: 'width-130 height-30 sticky-right-column1',
            getCanFilter: () => false,  
            cell: (params) => {
              // 获取概率数据
              const probabilities = params.getValue();// 这里假设 params.value 是一个包含两个概率值的数组 [0.21, 0.79]
              
              // 计算柱状图的宽度，假设容器宽度为 100px
              const maxWidth = 100;
              const bar1Width = Math.round(probabilities[0] * maxWidth);
              const bar2Width = maxWidth - bar1Width;
              
              // 返回包含柱状图的 JSX

                  return (
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                      <Tooltip title={`Probability of Bad Credit: ${probabilities[0]}`}>
                      <div
                          style={{
                              width: `${bar1Width}px`,
                              height: '20px', // 柱状图高度
                              backgroundColor: '#FF3366', // 柱状图颜色
                              fontSize: '8px'
                          }}
                          >
                          {/* {probabilities[0]} */}
                          </div>
                      </Tooltip>
                      <Tooltip title={`Probability of Good Credit: ${probabilities[1]}`}>
                          <div
                          style={{
                              width: `${bar2Width}px`,
                              height: '20px', // 柱状图高度
                              backgroundColor: '#33CC33', // 柱状图颜色
                              fontSize: '8px'
                          }}
                          >
                          {/* {probabilities[1]} */}
                          </div>
                      </Tooltip>
                  </div>
                  );
              },
          
          }
        ];

    const [sorting, setSorting] = useState([])
    const [filtering, setFiltering] = useState('')
    const [columnFilters, setColumnFilters] = useState([]);


    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getFacetedUniqueValues: getFacetedUniqueValues(),
        state: {
        sorting: sorting,
        globalFilter: filtering,
        columnFilters: columnFilters, // 添加列过滤状态
          // pageSize:20
        },
        onSortingChange: setSorting,
        onGlobalFilterChange: setFiltering,
        onColumnFiltersChange: setColumnFilters,
        
    })

    function exactMatchFilter(row, columnId, value) {
      return row.getValue(columnId) === value;
    }

    function ColumnFilter({ column }) {

      // input
      const [localFilterValue, setLocalFilterValue] = useState(column.getFilterValue() || "");      

      const sortedUniqueValues = 
      React.useMemo(
        () =>
          typeof column.type === 'number'
            ? []
            : Array.from(column.getFacetedUniqueValues().keys()).sort(),
        [column.getFacetedUniqueValues()]

      )
      
      if (column.id === 'Probability') {
        return null;  // 或者返回 <div></div> 如果你想保留空间
      }
      
      if (column.columnDef.type === 'number') {
        return (
          <div>
            <input
              type="number"
              min={Number(column.getFacetedMinMaxValues()?.[0] ?? '')}
              max={Number(column.getFacetedMinMaxValues()?.[1] ?? '')}
              value={localFilterValue?.[0] ?? ''}
              onChange={e => {
                const value = e.target.value;
                column.setFilterValue(old => [value, old?.[1]]);
              }}
              placeholder={`Min ${
                column.getFacetedMinMaxValues()?.[0]
                  ? `(${column.getFacetedMinMaxValues()?.[0]})`
                  : ''
              }`}
            />

            <input
              type="number"
              min={Number(column.getFacetedMinMaxValues()?.[0] ?? '')}
              max={Number(column.getFacetedMinMaxValues()?.[1] ?? '')}
              value={localFilterValue?.[1] ?? ''}
              onChange={e => {
                const value = e.target.value;
                column.setFilterValue(old => [old?.[0], value]);
              }}
              placeholder={`Max ${
                column.getFacetedMinMaxValues()?.[1]
                  ? `(${column.getFacetedMinMaxValues()?.[1]})`
                  : ''
              }`}
            />


        </div>
        );
      }
     else
      return (
    <div>
        <datalist id={column.id + 'list'}>
            {sortedUniqueValues.slice(0, 5000).map(value => (
                <option value={value} key={value} />
            ))}
        </datalist>

        <input
          // type="text"
          // value={localFilterValue}
          // onChange={(e) => setLocalFilterValue(e.target.value)}
          // onBlur={handleTextBlur}
          // placeholder={`Search...`}
          type="text"
          value={localFilterValue ?? ''}
          onChange={e => column.setFilterValue(e.target.value)}
          placeholder={`Search... (${column.getFacetedUniqueValues().size})`}
          list={column.id + 'list'}
        />
        </div>
      );
    }
    
    
    return (
        <div style={{ width: '100%',height:'380px'}}>
          {/* delete global searching */}
          {/* <input
            type='text'
            value={filtering}
            onChange={e => setFiltering(e.target.value)}
            placeholder={`Search anthing globally...`}
          /> */}
          <div style={{ width: '100%',height:'360px',borderRadius: '8px', boxShadow: '0px 4px 12px #7986cb',paddingLeft: '6px' }} className="scroll-container" ref={tableContainerRef}>
            <table >

              <thead>
                {table.getHeaderGroups().map(headerGroup => (
                  <tr key={headerGroup.id}>
                    {headerGroup.headers.map(header => (
                      <th
                        key={header.id}
                        className={header.column.columnDef.className}
                      >
                        {header.isPlaceholder ? null : (
                          <div style={{ display: 'flex', alignItems: 'center' }}>
                            <Typography variant="body1" style={{ fontWeight: 'bold' }}>
                            {flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                            </Typography>
                          <div style={{ display: 'flex', flexDirection: 'row' }}>
                                <span
                                  style={{ cursor: 'pointer', padding: '2px', borderRadius: '3px' }}
                                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f0f0f0'}
                                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                                  onClick={() => {
                                    table.setSorting([{ id: header.column.id, desc: false }]);
                                  }}
                                >
                                  🔼
                                </span>
                                <span
                                  style={{ cursor: 'pointer', padding: '2px', borderRadius: '3px' }}
                                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f0f0f0'}
                                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                                  onClick={() => {
                                    table.setSorting([{ id: header.column.id, desc: true }]);
                                  }}
                                >
                                  🔽
                                </span>
                            </div>

                          </div>
                        )}
                        {header.column.getCanFilter() ? (
                          <div>
                            {/* <ColumnFilter column={header.column} onClick={(e) => e.stopPropagation()} /> */}
                            <ColumnFilter column={header.column} />
                          </div>
                        ) : null}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>


              <tbody>
                {table.getRowModel().rows.map(row => (
                  <tr key={row.id} 
                  className={row.original.id === ID ? 'highlight' : '' }// highlight the selected row
                  ref={row.original.id === ID ? highlightedRowRef : null}  // 为匹配的行设置 ref 用于自动滚动到顶部
                  >
                    {row.getVisibleCells().map(cell => (
                      <td key={cell.id} className={cell.column.columnDef.className} >
                        
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div>
            <select
          value={table.getState().pagination.pageSize}
          onChange={e => {
            table.setPageSize(Number(e.target.value))
          }}
        >
          {[10, 50,100,200].map(pageSize => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
            <button onClick={() => table.setPageIndex(0)}>First page</button>
            <button
              disabled={!table.getCanPreviousPage()}
              onClick={() => table.previousPage()}
            >
              Previous page
            </button>
            <button
              disabled={!table.getCanNextPage()}
              onClick={() => table.nextPage()}
            >
              Next page
            </button>
            <button onClick={() => table.setPageIndex(table.getPageCount() - 1)}>
              Last page
            </button>
            <button onClick={clearFilters}>Clear Filters</button>
          </div>
        </div>
        
      )
    }





