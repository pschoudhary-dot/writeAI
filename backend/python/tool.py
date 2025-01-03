from crewai_tools import ScrapeWebsiteTool, SerperDevTool, GithubSearchTool, FileWriterTool, YoutubeVideoSearchTool

# Initialize the tool for internet searching capabilities
search_tool = SerperDevTool()

# To enable scrapping any website it finds during it's execution
web_scrapper_tool = ScrapeWebsiteTool()

# Initialize the tool for github searching capabilities
github_search_tool = GithubSearchTool()

# Initialize the tool for writing files
file_writer_tool = FileWriterTool()

# Initialize the tool for youtube searching capabilities
youtube_search_tool = YoutubeVideoSearchTool()


