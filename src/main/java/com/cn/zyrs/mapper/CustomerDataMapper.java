package com.cn.zyrs.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.cn.zyrs.domain.CustomerData;
/**
 * 创建标识：张祥
 * 创建时间：20171114
 */
public interface CustomerDataMapper {
    int deleteByPrimaryKey(String detailcode);

    int insert(CustomerData record);

    int insertSelective(@Param("customerdata")CustomerData customerdata);

    CustomerData selectByPrimaryKey(@Param("detailcode") String detailcode);
    
    CustomerData selectByCustomerid(@Param("customerid") String customerid);

    int updateByPrimaryKeySelective(CustomerData record);

    int updateByPrimaryKey(CustomerData record);
    
    List<CustomerData> getCustomerData(@Param("ordercode") String paramString1);
}