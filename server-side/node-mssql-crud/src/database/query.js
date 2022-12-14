export const queries = {
    getAllUser: 'SELECT * FROM [gps_db].[gps_db].[gps_usersmaster]',
    addUser: 'INSERT INTO [gps_db].[gps_db].[gps_usersmaster] (user_id,ad_user_name,email_id,contact_number,group_id,role_id,subgroup_id,name,room_no,address,p_number,punch_id,change_flag,hostel,hostel_tower,status,photo) VALUES (@user_id,@ad_user_name,@email_id,@contact_number,@group_id,@role_id,@subgroup_id,@name,@room_no,@address,@p_number,@punch_id,@change_flag,@hostel,@hostel_tower,@status,@photo)',
    getUserById: 'SELECT * FROM [gps_db].[gps_db].[gps_usersmaster] WHERE user_id=@user_id', 
    deleteUser:'DELETE FROM [gps_db].[gps_db].[gps_usersmaster] WHERE user_id=@user_id',
    getTotalUser: 'SELECT COUNT(*) FROM [gps_db].[gps_db].[gps_usersmaster]',
    updateUserById: "UPDATE [gps_db].[gps_db].[gps_usersmaster] SET ad_user_name=@ad_user_name,email_id=@email_id,contact_number=@contact_number,group_id=@group_id,role_id=@role_id,subgroup_id=@subgroup_id,name=@name,room_no=@room_no,address=@address,p_number=@p_number,punch_id=@punch_id,change_flag=@change_flag,hostel=@hostel,hostel_tower=@hostel_tower,status=@status,photo=@photo WHERE user_id=@user_id",


        
    /* __________________________________________________ADMIN DASHBOARD QUERIES__________________________________________________ */

   
   
    dashboardPendingRequest: "SELECT COUNT(*) AS TOTAL FROM [gps_db].[gps_db].[gps_gatepassmaster] WHERE status='Pending'",
    dashboardStudentInCampus: "SELECT COUNT(*) AS TOTAL FROM [gps_db].[gps_db].[gps_usersmaster] WHERE role_id = 1 AND ([gps_db].[gps_db].[gps_usersmaster].status = 'P' or [gps_db].[gps_db].[gps_usersmaster].status = 'PB');",
    dashboardStudentOutCampus: "SELECT COUNT(*) AS TOTAL FROM [gps_db].[gps_db].[gps_usersmaster] WHERE role_id = 1 AND status = 'A';",
    dashboardBlacklistStudent: "SELECT COUNT(*) AS TOTAL FROM [gps_db].[gps_db].[gps_blacklist_students] WHERE visibility = 1 AND CONVERT(date, GETDATE()) BETWEEN from_date AND to_date;",
    dashboardProfileRequest: "SELECT COUNT(*) AS TOTAL FROM [gps_db].[gps_db].[gps_profileupdate] WHERE status = 0;",
    dashboardTodayGatepass: "SELECT * FROM [gps_db].[gps_db].[gps_gatepassmaster] WHERE from_date = CONVERT(date, GETDATE());",
    dashboardAllPendingRequest: "SELECT [gps_db].[gps_db].[gps_usersmaster].user_id AS employee_id,[gps_db].[gps_db].[gps_usersmaster].name AS employee_name,COUNT(*) AS TOTAL FROM [gps_db].[gps_db].[gps_gatepassmaster], [gps_db].[gps_db].[gps_usersmaster] WHERE [gps_db].[gps_db].[gps_gatepassmaster].status = 'Pending' and [gps_db].[gps_db].[gps_usersmaster].user_id = [gps_db].[gps_db].[gps_gatepassmaster].send_approval_to GROUP BY [gps_db].[gps_db].[gps_usersmaster].user_id,[gps_db].[gps_db].[gps_usersmaster].name;",


    /* __________________________________________________ADMIN SETTINGS QUERIES__________________________________________________ */

    /////////////////////////////Group/Subgroup//////////////////////////////
    settingsGroup: "SELECT * FROM [gps_db].[gps_db].[gps_groups] WHERE gps_groupname NOT like '%alms%';",
    settingsSubgroup: "SELECT * FROM [gps_db].[gps_db].[gps_subgroup] WHERE subgroup_name NOT like '%NA%';",
    getGroupCount:"SELECT COUNT(*) AS TOTAL FROM [gps_db].[gps_db].[gps_groups]",
    getSubgroupCount:"SELECT COUNT(*) AS TOTAL FROM [gps_db].[gps_db].[gps_subgroup]",
    addGroup: "INSERT INTO [gps_db].[gps_db].[gps_groups] (gps_groupid,gps_groupname,gps_group_mastergroup_id) VALUES (@gps_groupid,@gps_groupname,@gps_group_mastergroup_id)",
    addSubgroup: "INSERT INTO [gps_db].[gps_db].[gps_subgroup] (subgroup_id,subgroup_name,subgroup_mastergroup_id) VALUES (@subgroup_id,@subgroup_name,@subgroup_mastergroup_id)",
    deleteGroup: "DELETE FROM [gps_db].[gps_db].[gps_groups] WHERE gps_groupid=@id;",
    deleteSubgroup: "DELETE FROM [gps_db].[gps_db].[gps_subgroup] WHERE subgroup_id=@id;",  
    /////////////////////////////Roles//////////////////////////////
    settingsAllRole: "SELECT * FROM [gps_db].[gps_db].[gps_roles];",
    settingsUserRole:"SELECT [gps_db].[gps_db].[gps_usersmaster].user_id AS employeecode, [gps_db].[gps_db].[gps_usersmaster].name AS employeename, [gps_db].[gps_db].[gps_usersmaster].status AS employeestatus,[gps_db].[gps_db].[gps_roles].role_name AS employeerole, [gps_db].[gps_db].[gps_roles].role_id AS roleid FROM [gps_db].[gps_db].[gps_usersmaster],[gps_db].[gps_db].[gps_roles] WHERE gps_usersmaster.role_id != 1 and [gps_db].[gps_db].[gps_usersmaster].role_id = [gps_db].[gps_db].[gps_roles].role_id;",
    settingsAllStatus:"select DISTINCT [gps_db].[gps_db].[gps_usersmaster].status from [gps_db].[gps_db].[gps_usersmaster];",
    /////////////////////////////Param Config//////////////////////////////
    settingsParameterConfig:"SELECT * FROM [gps_db].[gps_db].[gps_configmaster]",
    updateParameterConfig:"UPDATE [gps_db].[gps_db].[gps_configmaster] SET value=@value WHERE param_id=@param_id;",
    addUser: "INSERT INTO [gps_db].[gps_db].[gps_usersmaster] (user_id,ad_user_name,email_id,contact_number,group_id,role_id,subgroup_id,name,room_no,address,p_number,punch_id,change_flag,hostel,hostel_tower,status,photo) VALUES (@user_id,@ad_user_name,@email_id,@contact_number,@group_id,@role_id,@subgroup_id,@name,@room_no,@address,@p_number,@punch_id,@change_flag,@hostel,@hostel_tower,@status,@photo);",
    updateUser: "UPDATE [gps_db].[gps_db].[gps_usersmaster] SET ad_user_name=@ad_user_name,email_id=@email_id,contact_number=@contact_number,group_id=@group_id,role_id=@role_id,subgroup_id=@subgroup_id,name=@name,room_no=@room_no,address=@address,p_number=@p_number,punch_id=@punch_id,change_flag=@change_flag,hostel=@hostel,hostel_tower=@hostel_tower,status=@status,photo=@photo WHERE user_id=@user_id;",
   
    /* __________________________________________________ADMIN REPORT QUERIES__________________________________________________ */



    reportStudentTenureWise: "SELECT * FROM [gps_db].[gps_db].[gps_gatepassmaster] WHERE user_id=@user_id AND applied_date BETWEEN @date_start AND @date_end;",
    reportStundentStatusWise: "SELECT * FROM [gps_db].[gps_db].[gps_gatepassmaster] WHERE status=@statuslist AND [gps_db].[gps_db].[gps_gatepassmaster].applied_date BETWEEN @date_start AND @date_end ORDER BY applied_date DESC;",
    reportStundentStatusTenureWise: "SELECT * FROM [gps_db].[gps_db].[gps_gatepassmaster] WHERE status=@statuslist AND user_id=@user_id AND [gps_db].[gps_db].[gps_gatepassmaster].applied_date BETWEEN @date_start AND @date_end;",
    reportGatepassTypeWise:"SELECT * FROM [gps_db].[gps_db].[gps_gatepassmaster] WHERE gatepass_type = @gpt AND applied_date BETWEEN @date_start AND @date_end;",
    reportBlacklistedStudentDateWise:"SELECT * FROM [gps_db].[gps_db].[gps_blacklist_students] WHERE [gps_db].[gps_db].[gps_blacklist_students].from_date BETWEEN @date_start AND @date_end;",
    reportBlacklistedGroupDateWise:"SELECT * FROM [gps_db].[gps_db].[gps_blacklistgroup] WHERE [gps_db].[gps_db].[gps_blacklistgroup].from_date BETWEEN @date_start AND @date_end;",
    reportDefaulterDateWise:"SELECT * FROM [gps_db].[gps_db].[gps_defaulter_students], [gps_db].[gps_db].[gps_gatepassmaster] WHERE [gps_db].[gps_db].[gps_defaulter_students].request_id = [gps_db].[gps_db].[gps_gatepassmaster].request_id AND [gps_db].[gps_db].[gps_gatepassmaster].from_date BETWEEN @date_start AND @date_end;",
    reportEOD: "SELECT * FROM [gps_db].[gps_db].[gps_gatepassmaster] WHERE [gps_db].[gps_db].[gps_gatepassmaster].applied_date = @date;",
    reportWarden: "SELECT * FROM [gps_db].[gps_db].[gps_gatepassmaster] WHERE (send_approval_to = @user_id OR approved_or_rejected_by = @user_id) AND applied_date BETWEEN @date_start AND @date_end;",

    /* __________________________________________________Blacklist Student QUERIES__________________________________________________ */

    addBlacklistedStudent: "INSERT INTO [gps_db].[gps_db].[gps_blacklist_students] (user_id,from_date,from_time,to_date,to_time,blacklisted_by,remark,visibility) VALUES (@user_id,@from_date,@from_time,@to_date,@to_time,@blacklisted_by,@remark,@visibility) UPDATE [gps_db].[gps_db].[gps_usersmaster] SET status = 'PB' where user_id=@user_id;",



    /* __________________________________________________Student QUERIES__________________________________________________ */

    applyLocalFixedGatepass: "INSERT INTO [gps_db].[gps_db].[gps_gatepassmaster] (user_id,gatepass_type,from_date,from_time,to_date,to_time,purpose,destination,destination_contact,visit_to,send_approval_to,applied_date,applied_time,status) VALUES (@user_id,1,@from_date,@from_time,@to_date,@to_time,@purpose,@destination,@destination_contact,@visit_to,@send_approval_to,@applied_date,@applied_time,'AutoApproved')",
    applyLocalFlexibleGatepass: "INSERT INTO [gps_db].[gps_db].[gps_gatepassmaster] (user_id,gatepass_type,from_date,from_time,to_date,to_time,purpose,destination,destination_contact,visit_to,send_approval_to,applied_date,applied_time,status) VALUES (@user_id,2,@from_date,@from_time,@to_date,@to_time,@purpose,@destination,@destination_contact,@visit_to,@send_approval_to,@applied_date,@applied_time,'Pending')",
    cancelGatepass:"UPDATE [gps_db].[gps_db].[gps_gatepassmaster] SET status='Cancelled' WHERE request_id=@id;",
    expireGatepass:"UPDATE [gps_db].[gps_db].[gps_gatepassmaster] SET status='Expire' WHERE request_id=@id;",
    recentGatepass:"SELECT TOP 3 status , comments , applied_date , applied_time , gatepass_type , from_date , from_time FROM [gps_db].[gps_db].[gps_gatepassmaster] WHERE user_id=@id ORDER BY applied_date DESC , applied_time DESC;",
    getDashboardDetails:"SELECT * FROM [gps_db].[gps_db].[gps_usersmaster] WHERE email_id = @email",

    /* __________________________________________________Warden QUERIES__________________________________________________ */

    acceptGatepass:"UPDATE [gps_db].[gps_db].[gps_gatepassmaster] SET status='Approved' WHERE request_id=@id;",
    rejectGatepass:"UPDATE [gps_db].[gps_db].[gps_gatepassmaster] SET status='Rejected' WHERE request_id=@id;",
};