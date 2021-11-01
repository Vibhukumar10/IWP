<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <head>
                <style>
                    table,th,td
                    {
                    	border:1px solid black;
                    	border-collapse:collapse;
			text-align: center;
			padding: 2px;
                    }
                    th
                    {
			color: white;
                        background-color:blue;
                    }
                </style>
            </head>
            <body>
                <h1>VIT Student Details - IWP DA5</h1>
                <h3>sorted order based on college name</h3>
                <table>
                    <tr>
                        <th> REGID </th>
                        <th> NAME </th>
                        <th> COLLEGE </th>
                        <th> BRANCH </th>
                        <th> YEAR </th>
                        <th> EMAIL ID </th>
                        <th> CGPA </th>
                        <th> COURSES </th>
                        <th> CREDITS </th>
                        
                    </tr>
                    <xsl:for-each select="STUDENTS/STUDENT">
                    <xsl:sort select="CGPA"/>
                        <tr>
                            <td>
                                <xsl:value-of select="REGID"/>
                            </td>
                            <td>
                                <xsl:value-of select="NAME"/>
                            </td>
                            <td>
                                <xsl:value-of select="COLLEGE"/>
                            </td>
                            <td>
                                <xsl:value-of select="BRANCH"/>
                            </td>
                            <td>
                                <xsl:value-of select="YEAR"/>
                            </td>
                            <td>
                                <xsl:value-of select="EMAILID"/>
                            </td>
                            <td>
                                <xsl:value-of select="CGPA"/>
                            </td>
                            <td>
                                <xsl:value-of select="COURSES"/>
                            </td>
                            <td>
                                <xsl:value-of select="CREDITS"/>
                            </td>
                        </tr>
                    </xsl:for-each>
                </table>
                <h3>The student details whose CGPA between 7.5 and 8.5: </h3>
                <table>
                    <tr>
                        <th> REGID</th>
                        <th> NAME </th>
                        <th> COLLEGE </th>
                        <th> BRANCH </th>
                        <th> YEAR </th>
                        <th> EMAIL ID </th>
                        <th> CGPA </th>
                        <th> COURSES </th>
                        <th> CREDITS </th>
                    </tr>
                    <xsl:for-each select="STUDENTS/STUDENT"  > 
                    <xsl:if test="CGPA &lt; 8.5 and CGPA &gt; 7.5">
                        <tr>
                            <td>
                                <xsl:value-of select="REGID"/>
                            </td>
                            <td>
                                <xsl:value-of select="NAME"/>
                            </td>
                            <td>
                                <xsl:value-of select="COLLEGE"/>
                            </td>
                            <td>
                                <xsl:value-of select="BRANCH"/>
                            </td>
                            <td>
                                <xsl:value-of select="YEAR"/>
                            </td>
                            <td>
                                <xsl:value-of select="EMAILID"/>
                            </td>
                            <td>
                                <xsl:value-of select="CGPA"/>
                            </td>
                            <td>
                                <xsl:value-of select="COURSES"/>
                            </td>
                            <td>
                                <xsl:value-of select="CREDITS"/>
                            </td>
                        </tr>
                        </xsl:if>
                       </xsl:for-each> 
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
