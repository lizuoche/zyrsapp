package junit.test;

import org.junit.runner.RunWith;
import org.slf4j.LoggerFactory;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.AbstractJUnit4SpringContextTests;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

//@RunWith(SpringJUnit4ClassRunner.class)
//// 琛ㄧず缁ф壙浜哠pringJUnit4ClassRunner绫�
//@ContextConfiguration(locations = { "classpath:spring-mybatis.xml" })
//public class TestMyBatis2 {
//	private static Logger log = Logger.getLogger(TestMyBatis2.class);
//	@Resource(name = "userService")
//	private IUser userService;
//
//	final static String DRIVER_CLASS = "com.microsoft.sqlserver.jdbc.SQLServerDriver";
//	final static String DATABASE_URL = "jdbc:sqlserver://192.168.1.10:1433;databaseName=yc_demo";
//	final static String DATABASE_USRE = "sa";
//	final static String DATABASE_PASSWORD = "111111";
//
//	
//	
//}
@ContextConfiguration(locations = {"classpath:application-context.xml"})
@RunWith(SpringJUnit4ClassRunner.class)
public abstract class SpringTestCase extends AbstractJUnit4SpringContextTests {
	protected org.slf4j.Logger logger = LoggerFactory.getLogger(getClass());
}


