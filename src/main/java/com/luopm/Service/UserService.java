package com.luopm.Service;

import com.alibaba.druid.support.json.JSONUtils;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.luopm.mapper.UserMapper;
import com.luopm.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;

@Service("userService")
public class UserService {

    @Autowired
    private UserMapper userMapper;

    public int addUser(User user){
//        HashMap<String,String> hashMap = new HashMap<>();
//        int resultCode = userMapper.insert(user);
//        if (resultCode == 1){
//            hashMap.put("resultCode",resultCode+"");
//            hashMap.put("resultMsg","Success");
//            hashMap.put("resultObj","");
//        }
//        else {
//            hashMap.put("resultCode","0");
//            hashMap.put("resultMsg",userMapper.insert(user)+"");
//            hashMap.put("resultObj","");
//        }
        return userMapper.insert(user);
    }

    /*
     * 这个方法中用到了我们开头配置依赖的分页插件pagehelper
     * 很简单，只需要在service层传入参数，然后将参数传递给一个插件的一个静态方法即可；
     * pageNum 开始页数
     * pageSize 每页显示的数据条数
     * */
    public PageInfo<User> findAllUser(int pageNum, int pageSize) {
        //将参数传给这个方法就可以实现物理分页了，非常简单。
        PageHelper.startPage(pageNum, pageSize);
        List<User> userList = userMapper.selectUsers();
        PageInfo result = new PageInfo(userList);
        return result;
    }

}